import { Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";


function Grouped(){
    const [rows, setRows] = useState([{id: 0, _:'-', ll: 0, ul: 0, lb: 0, ub: 0, Xm: 0, f: 0, cf:0, fx: 0}]);

    const base_values = {disableColumnMenu: true, headerAlign: 'center', align: 'center'}

    return(
        <Box>
            <DataGrid
            rows={rows}
            hideSortIcons = {true}
            hideable = {false}
            disableColumnSorting = {true}
            hideFooterPagination = {true}
            disableColumnResize={true}
            columns={[
                { field: 'll', disableColumnMenu: true, headerAlign: 'center', align: 'center', editable: true, description: "Lower Limit", width: 50},
                { field: '_', headerName: "", disableColumnMenu: true, headerAlign: 'center', align: 'center', width: 25},
                { field: 'ul', disableColumnMenu: true, headerAlign: 'center', align: 'center', editable: true, description: "Upper Limit", width: 50},
                { field: 'f', disableColumnMenu: true, headerAlign: 'center', align: 'center', editable: true, description: "Frequency", width: 50},
                { field: 'cf', disableColumnMenu: true, headerAlign: 'center', align: 'center', editable: true, description: "Frequency", width: 50},
                { field: 'lb', disableColumnMenu: true, headerAlign: 'center', align: 'center', description: "Lower Boundary" , width: 50},
                { field: '_', headerName: "", disableColumnMenu: true, headerAlign: 'center', align: 'center', width: 25},
                { field: 'ub', disableColumnMenu: true, headerAlign: 'center', align: 'center', description: "Upper Boundary" , width: 50},
                { field: 'Xm', disableColumnMenu: true, headerAlign: 'center', align: 'center', description: "Class Midpoint" , width: 50},
                { field: 'fx', disableColumnMenu: true, headerAlign: 'center', align: 'center', description: "Class Midpoint" , width: 50},
                { field: '|x-x|', disableColumnMenu: true, headerAlign: 'center', align: 'center', description: "Class Midpoint" , width: 60},
                { field: '|x-x|²', disableColumnMenu: true, headerAlign: 'center', align: 'center', description: "Class Midpoint" , width: 60},
                { field: '|x-x|⁴', disableColumnMenu: true, headerAlign: 'center', align: 'center', description: "Class Midpoint" , width: 60},
                { field: 'f|x-x|', disableColumnMenu: true, headerAlign: 'center', align: 'center', description: "Class Midpoint" , width: 60},
                { field: 'f|x-x|²', disableColumnMenu: true, headerAlign: 'center', align: 'center', description: "Class Midpoint" , width: 60},
                { field: 'f|x-x|⁴', disableColumnMenu: true, headerAlign: 'center', align: 'center', description: "Class Midpoint" , width: 60},
                ]}/>
        </Box>
    )
}

export { Grouped }