import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import style from '../../styles/default.module.css'

export default function Nav() {
    return (      
        <AppBar style={{backgroundColor: 'rgb(138, 3, 138)'}} position='static' >
            <Toolbar sx={{
                display: 'grid',
                gridAutoColumns: '1fr',
                gap: 1,
            }}>
                <Link to='/' className={style.link}>
                    <Typography variant='h6' sx={{gridRow: '1', gridColumn: '1'}}>
                        List to do
                    </Typography>
                </Link>
                <Button color='inherit' variant='outlined' sx={{ gridRow: '1', gridColumn: '7' }}>
                    <Link to='/register' id={style.navLink} className={style.link}>
                        Register
                    </Link>
                </Button>
                <Button color='inherit' variant='outlined' sx={{ gridRow: '1', gridColumn: '8' }}>
                    <Link to='/login' id={style.navLink} className={style.link}>
                        Login
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>   
    )
}
