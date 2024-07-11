

function round(x, decimals){
    places = Math.pow(10, decimals);
    return(Math.round(x*places)/places)
}

class Boundaries {
    limits;
    constructor(limits){
        this.limits = limits;
    }

    get upper(){
        return this.limits.upper + 0.5;
    }

    get lower(){
        return this.limits.lower - 0.5;
    }

    toString(){
        return `${this.Lower} — ${this.Upper}`
    }
}


class Limits {
    boundaries = Boundaries(this);
    _upper = 0;
    _lower = 0;

    get upper(){
        return this._upper;
    }

    set upper(x){
        this._upper = x;
    }

    get lower(){
        return this._lower;
    }

    set lower(x){
        this._lower = x;
    }

    get interval(){
        return this.upper - this.lower;
    }

    get midpoint(){
        return (this.upper + this.lower)/2;
    }

    toString() {
        return `${this.Lower} — ${this.Upper}`;
    }
}


export class Class {
    limits = Limits();
    frequency = 0;

    setLimits(lower, upper, classes){
        this.limits.lower = lower;
        this.limits.upper = upper;
        this.classes = classes;
    }

    setFrequency(frequency){
        this.frequency = frequency;
    }

    get interval(){
        return this.limits;
    }

    get cumulativeFrequency() {
        cumulative = 0;
        this.classes.classes.forEach(x => {
            if(x != this){
                cumulative += x.frequency;
            }
        })
        return cumulative;
    }

    get fx() {
        return this.frequency*this.limits.midpoint;
    }

    get xx(){
        return Math.abs(this.classes.mean - this.limits.midpoint);
    }

    get xx2(){
        return round(Math.pow(this.xx, 2))
    }

    get xx4(){
        return round(Math.pow(this.xx, 4))
    }

    get fxx(){
        return this.frequency*Math.abs(this.classes.mean - this.limits.midpoint);
    }

    get fxx2(){
        return round(Math.pow(this.fxx, 2))
    }

    get fxx4(){
        return round(Math.pow(this.fxx, 4))
    } 

}


class Classes {
    classes = []
    decimals = 2;

    addClass(lower, upper){
        var dataclass = Class(lower, upper, this);
        this.classes.push(dataclass);
    }

    setCustomSize(size){
        this._classSize = size;
    }

    // Properties

    /**
     *  Total Frequency (n)
     *      The sum of all the classes frequency.
     */
    get totalFrequency(){
        return this.list.length;
    }

    /**
     *  Summation of FX (Frequency x Midpoint)
     *      The sum of all the classes with regards to their frequency and midpoint.
     */
    get sumOfFx(){
        sfx = 0;
        this.classes.forEach(x => {
            sfx += x.fx;
        })
        return sfx;
    }

    /**
     *  Range
     *      The difference between the highest value of the classes and the lowest value of the classes.
     */
    get range(){
        return this.classes.at(-1).limits.upper - this.classes.at(0).limits.lower;
    }

    /**
     *  Class Size
     *      The difference between the upper limit and the lower limit.
     */
    get classSize(){
        var limits = this.classes.at(0).limits;
        return limits.upper - limits.lower; 
    }

    /**
     *  Mean
     *      The average of all the data.
     */
    get mean(){
        return round((this.sumOfFx/this.totalFrequency), decimals)
    }

    /**
     *  Median
     *      The center of all the data.
     */
    get median(){
        return this.quartile(2);
    }

    /**
     *  Mode
     *      The data with the most occurence.
     */
    get mode(){
        var classes_copy = [...this.classes];
        const max = classes_copy.reduce((prev, current) => (prev.frequency > current.frequency) ? prev : current, 1);
        var index = this.findClass({dataclass: max});
        var d1 = max.frequency - this.classes.at(index-1).frequency;
        var d2 = max.frequency - this.classes.at(index+1).frequency;
        return round(max.limits.boundaries.lower + ((d1/(d1+d2))*this.classSize),2)
    }

    // Quartiles, Deciles and Percentiles and all the neccessary functions.

    quartile(q){
        if (q < 1 || q > 4){
            q = 1;
        }
        return this.percentile(q*4);
    }

    decile(d){
        if (d < 1 || d > 10){
            d = 1;
        }
        return this.percentile(d*10);
    }

    percentile(p){
        var cf_location = (p/100)*this.totalFrequency;
        var index = findClass({cumulativeFrequency: cf_location})
        var percentile_class = classes.at(index);
        var lower_class_cf = 0;
        if (index != 0) lower_class_cf = percentile_class.cumulativeFrequency;
        return round(percentile_class.boundaries.lower + ((cf_location-lower_class_cf)/percentile_class.frequency)*this.classSize, 2);
    }

    findClass({cumulativeFrequency = 0, dataclass = null, f = 0}){
        if(cf != 0){
            this.classes.forEach((x, index) => {
                if (x.cumulativeFrequency >= cumulativeFrequency){
                    return index;
                }
            })
        }else
        if(f!= 0){

        }
        else if (dataclass != null){
            this.classes.forEach((x, index) => {
                if (x >= dataclass){
                    return index;
                }
            })
        }
    }
}
