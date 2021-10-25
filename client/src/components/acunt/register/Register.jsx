import React, { useState } from 'react'
import style from '../../../styles/default.module.css'
import { useDispatch } from 'react-redux'
import { postUser } from '../../../action/action'
import { Container, Button, TextField, Typography} from '@mui/material'

export default function Register() {

    const dispatch = useDispatch()
    const [ firstName, setfirstName ] = useState('')
    const [ lastName, setlastName ] = useState('')
    const [ email, setemail ] = useState('')
    const [ password, setpassword ] = useState('') 
    
    const submit = (e) => {
        e.preventDefault()
        const reEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        
        if(!reEmail.test(email)) {
            return alert('Email erroneo')
        }

        dispatch(postUser(firstName, lastName, email, password))
    }
    const handlerChange = (e) => {

        switch(e.target.name){

            case 'firstName':
                setfirstName(e.target.value)
            
            case 'lastName':
                setlastName(e.target.value)
            
            case 'email':
                setemail( e.target.value)

            case 'password':
                setpassword(e.target.value)
        }
    }

    return (
        <div className={style.content}>
            <Container maxWidth='1sm'>
                <form className={style.form}>

                    <TextField
                        name='firstName'
                        fullWidth
                        color='secondary'
                        sx={{ backgroundColor: 'rgb(61, 61, 61)' }} 
                        InputLabelProps={{className: style.text}}
                        InputProps={{className: style.text}}
                        id='outlined-required' 
                        label='First Name' 
                        variant='filled'
                        onChange={e => handlerChange(e)}
                    />

                    <TextField
                        name='lastName'  
                        fullWidth
                        color='secondary'
                        sx={{ backgroundColor: 'rgb(61, 61, 61)' }} 
                        InputLabelProps={{className: style.text}}
                        InputProps={{className: style.text}}
                        id='outlined-required' 
                        label='Last Name' 
                        variant='filled'
                        onChange={e => handlerChange(e)}
                    />

                    <TextField 
                        name='email' 
                        fullWidth
                        color='secondary'
                        sx={{ backgroundColor: 'rgb(61, 61, 61)' }} 
                        InputLabelProps={{className: style.text}}
                        InputProps={{className: style.text}}
                        id='outlined-required' 
                        label='Email' 
                        variant='filled'
                        onChange={e => handlerChange(e)}
                    />

                    <TextField  
                        name='password'
                        fullWidth
                        color='secondary'
                        sx={{ backgroundColor: 'rgb(61, 61, 61)' }} 
                        InputLabelProps={{className: style.text}}
                        InputProps={{className: style.text}}
                        id='outlined-required' 
                        label='Password' 
                        type='password'
                        variant='filled'
                        onChange={e => handlerChange(e)}
                    />

                    <Button onClick={e => submit(e)} sx={{marginTop: '2%'}} color='secondary' variant='contained'> Register</Button>
                </form>
            </Container>
        </div>
    )
}
