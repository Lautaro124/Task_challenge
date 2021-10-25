import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import style from '../../../styles/default.module.css'
import { getUser } from '../../../action/action'
import { Container, Button, TextField } from '@mui/material'

export default function Login() {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submited = () => {

        dispatch(getUser(email, password))
    }

    const emailHandler = (e) => {

        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {

        setPassword(e.target.value)
    }

    return (
        <div className={style.content}>
            <Container maxWidth='1sm'>
                <form className={style.form}>

                    <TextField  
                        fullWidth
                        color='secondary'
                        sx={{ backgroundColor: 'rgb(61, 61, 61)' }} 
                        InputLabelProps={{className: style.text}}
                        InputProps={{className: style.text}}
                        id='outlined-required' 
                        label='Email' 
                        variant='filled'
                        onChange={e => emailHandler(e)}
                    />

                    <TextField  
                        fullWidth
                        color='secondary'
                        sx={{ backgroundColor: 'rgb(61, 61, 61)' }} 
                        InputLabelProps={{className: style.text}}
                        InputProps={{className: style.text}}
                        id='outlined-required' 
                        label='Password' 
                        variant='filled'
                        type='password'
                        onChange={e => passwordHandler(e)}
                    />

                    <Button onClick={() =>submited()} sx={{marginTop: '2%'}} color='secondary' variant='contained'>
                        <Link to='/' id={style.navLink} className={style.link}>
                            Login
                        </Link>
                    </Button>
                </form>
            </Container>
        </div>
    )
}
