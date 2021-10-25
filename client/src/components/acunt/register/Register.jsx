import React, { useState } from 'react'
import style from '../../../styles/default.module.css'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postUser } from '../../../action/action'
import { Container, Button, TextField } from '@mui/material'

export default function Register() {

    const dispatch = useDispatch()
    const [ firstName, setfirstName ] = useState('')
    const [ lastName, setlastName ] = useState('')
    const [ email, setemail ] = useState('')
    const [ password, setpassword ] = useState('') 
    const users = useSelector(state => state.Users)

    const submit = (e) => {
        e.preventDefault()
        const reEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        
        if(!reEmail.test(email)) {
            return swal({ 
                title: 'Email incorrecto',
                text: 'Es muy probable que tu email este mal',
                icon: 'error',
                button: 'Aceptar'
            })
        }
        
        if(users.find(e => e.firstName === firstName)){
            return swal({ 
                title: 'Usuario ya registrado',
                text: 'El usuario fue registrado anteriormente, puede utilizar otro nombre o poner una mayuscula ;D',
                icon: 'error',
                button: 'Aceptar'
            })
        }
        
        dispatch(postUser(firstName, lastName, email, password))
    }
    const handlerChange = (e) => {

        switch(e.target.name){

            case 'firstName':
                setfirstName(e.target.value)
                break;
            
            case 'lastName':
                setlastName(e.target.value)
                break;
            
            case 'email':
                setemail( e.target.value)
                break;

            case 'password':
                setpassword(e.target.value)
                break;
            
            default:
                return ;
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
                        label='User' 
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
                        label='Name' 
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

                    <Button onClick={e => submit(e)} sx={{marginTop: '2%'}} color='secondary' variant='contained'> 
                        <Link to='/' id={style.navLink} className={style.link}>
                            Register
                        </Link>
                    </Button>
                </form>
            </Container>
        </div>
    )
}
