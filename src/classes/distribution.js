

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
    Boundaries = Boundaries(this);
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

    setLimits(lower, upper){
        this.limits.lower = lower;
        this.limits.upper = upper;
    }

    setFrequency(frequency){
        this.frequency = frequency;
    }

    get interval(){
        return this.limits;
    }

    get cumulativeFrequency() {

    }

    get fx() {
        return this.frequency*this.limits.midpoint;
    }


}


class Classes {
    classes = []
    decimals = 2;

    addClass(lower, upper){
        var dataclass = Class(lower, upper, this);
        this.classes.push(dataclass);
    }

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



    get mean(){
        return round((this.totalFrequency), decimals)
    }

    get median(){

    }

    quartile(q){

    }

    decile(d){

    }

    percentile(p){

    }
    
    setCustomSize(size){
        this._classSize = size;
    }
    
}


export class GroupedFrequency {
    data = []
    classes = []
    _classSize;


}