import { Component } from "react"
import { Paper , Box , Button} from "@mui/material"


export class BookSlot extends Component {
    render(){
        return(
            <>
            <div className="container align-items-center p-2 text-center" style={{ width: '100%'  , background: '#00BCD4' }}>
                    <h1 className="f_Poppins" style={{ color: 'white' , marginBottom: 0}}>Book Slot</h1>
                 </div>
            <div className="container p-4" style={{ backgroundColor: '#F5F5F5' }}>
            <Paper sx={{ display: 'flex' , marginBottom: '1rem'}}>
                <Box m={2} p={2}>
                    
                </Box>
            </Paper>
            </div>
            </>
        )
    }
}