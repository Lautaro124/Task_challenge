import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import style from '../../styles/default.module.css'
import { postTask } from '../../action/action'
import { Container, TextField, Button } from '@mui/material'
import axios from 'axios'

export default function Create() {

    const dispatch = useDispatch()
    const [ urls, setUrl ] = useState([])
    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')

    const uploadImage = async (e) => {
        
        const data = new FormData()
        data.append('file',e)
        data.append('upload_preset','ImagesAdd')

        const text = await axios.post('https://api.cloudinary.com/v1_1/dwvnbejfd/image/upload', data)
        
        setUrl([...urls, text.data.url])
    }


    const onSubmit = async(e) => {
        e.preventDefault()

            
        const strinImg = JSON.stringify(urls)
        
        dispatch(postTask(name, strinImg, description))
        
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
                    
                    <TextField 
                        fullWidth
                        color='secondary'
                        sx={{ backgroundColor: 'rgb(61, 61, 61)' }} 
                        InputLabelProps={{className: style.text}}
                        InputProps={{className: style.text}}
                        onChange={e => setDescription(e.target.value)}
                        id='outlined-required' 
                        label='Descripción' 
                        variant='filled' 
                    />

                    <input type='file' className={style.input} onChange={ e => uploadImage(e.target.files[0])}/>
                    {
                        name !== '' && description !== ''?
                        
                        <Button onClick={e=> onSubmit(e) } color='secondary' variant='contained'> 
                            <Link to='/' id={style.navLink} className={style.link}>
                                Crear tarea
                            </Link>
                        </Button>:

                        <Button disabled onClick={e=> onSubmit(e) } color='secondary' variant='contained'> 
                            Crear tarea
                        </Button>
                    }
                </form>
            </Container>
        </div>
    )
}
