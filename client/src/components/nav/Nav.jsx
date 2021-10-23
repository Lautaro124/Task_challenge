import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function Nav() {
    return (      
        <AppBar style={{backgroundColor: 'rgb(138, 3, 138)'}} position="static" >
            <Toolbar sx={{
                display: 'grid',
                gridAutoColumns: '1fr',
                gap: 1,
            }}>
                <Typography variant="h6" sx={{gridRow: '1', gridColumn: '1'}}>
                    List
                </Typography>
                <Button color="inherit" variant="outlined" sx={{ gridRow: '1', gridColumn: '7' }}>
                    Register
                </Button>
                <Button color="inherit" variant="outlined" sx={{ gridRow: '1', gridColumn: '8' }}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>   
    )
}
