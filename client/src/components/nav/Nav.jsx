import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../action/action'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'
import style from '../../styles/default.module.css'

export default function Nav() {

    const dispatch = useDispatch()
    const local = useSelector(state => state.User)
    
    const handlerLogOut = (e) => {

        e.preventDefault()

        dispatch(logOut())
    }

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

                {
                    local.firstName?
                    <Typography variant='h6' sx={{ gridRow: '1', gridColumn: '7' }}>{local.firstName}</Typography>:
                    <Button color='inherit' variant='outlined' sx={{ gridRow: '1', gridColumn: '7' }}>
                        <Link to='/register' id={style.navLink} className={style.link}>
                            Register
                        </Link>
                    </Button>
                }
                {
                    local.firstName?
                    <Button color='inherit'  sx={{ gridRow: '1', gridColumn: '8' }} onClick={e => handlerLogOut(e)}>
                        <LogoutIcon/>Log out
                    </Button>:
                    <Button color='inherit' variant='outlined' sx={{ gridRow: '1', gridColumn: '8' }}>
                        <Link to='/login' id={style.navLink} className={style.link}>
                            Login
                        </Link>
                    </Button>

                }
            </Toolbar>
        </AppBar>   
    )
}
