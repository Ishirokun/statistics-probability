import { Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';


function Grouped(){
    return(
        <Box>
            <DataGrid columns={[{ field: 'Lower Limit', editable: true  }, { field: 'Upper Limit', editable: true }]} />
        </Box>
    )
}

export { Grouped }