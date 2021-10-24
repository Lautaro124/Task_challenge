import React from 'react'
import style from '../../styles/default.module.css'
import { Container, TextField, Checkbox, Typography, Button } from '@mui/material'

export default function create() {
    return (
        <div className={style.content}>
            <Container maxWidth='1sm' >
                <form className={style.form}>
                    <Typography variant='h4' sx={{ color: 'white', marginBottom: '1%'}}> Add task</Typography>

                    <TextField 
                        fullWidth
                        color='secondary'
                        sx={{ backgroundColor: 'rgb(61, 61, 61)' }} 
                        InputLabelProps={{className: style.text}}
                        InputProps={{className: style.text}}
                        id='outlined-required' 
                        label='Name' 
                        variant='filled' 
                    />
                    
                    <div className={style.div}>
                        <Checkbox sx={{color: 'white'}}/>

                        <Typography variant='h6' sx={{ color: 'white' }} >
                            I am reference
                        </Typography>
                    </div>
                    <input type="file" className={style.input}/>
                    <Button color='secondary' variant='contained'> Send</Button>
                </form>
            </Container>
        </div>
    )
}
