import React, { useState } from 'react'
import style from '../../styles/default.module.css'
import { Container, TextField, Checkbox, Typography, Button } from '@mui/material'
import axios from 'axios'

export default function Create() {

    const [ imag, setImag ] = useState('')
    const [ name, setName ] = useState('')
    const [ reference, setReference ] = useState(null)

    const uploadImage = async () => {
        const data = new FormData()
        data.append('file',imag)
        data.append('upload_preset','ImagesAdd')

        await axios.post('htttps://api.cloudinary.com/v1_1/dwvnbejfd/image/upload', data)
    }

    const detectedRef = (e) => {

        if(e){
            setReference(localStorage.user._id)
        }
        else {
            setReference(null)
        }
    }
    const onSubmit = () => {

    }

    return (
        <div className={style.content}>
            <Container maxWidth='1sm' >
                <form className={style.form}>

                    <TextField 
                        fullWidth
                        color='secondary'
                        sx={{ backgroundColor: 'rgb(61, 61, 61)' }} 
                        InputLabelProps={{className: style.text}}
                        InputProps={{className: style.text}}
                        onChange={e => setName(e.target.value)}
                        id='outlined-required' 
                        label='Name' 
                        variant='filled' 
                    />
                    
                    <div className={style.div}>
                        <Checkbox sx={{color: 'white'}} onChange={e => detectedRef(e.target.checked)}/>

                        <Typography variant='h6' sx={{ color: 'white' }} >
                            I am reference
                        </Typography>
                    </div>
                    <input type='file' className={style.input} onChange={ e => setImag(e.target.files[0])}/>
                    <Button onClick={ onSubmit() }color='secondary' variant='contained'> Add task</Button>
                </form>
            </Container>
        </div>
    )
}
