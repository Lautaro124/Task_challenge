import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import style from '../../styles/default.module.css'
import { postTask } from '../../action/action'
import { Container, TextField, Button } from '@mui/material'
import axios from 'axios'

export default function Create() {

    const dispatch = useDispatch()
    const [ imag, setImag ] = useState('')
    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')

    const uploadImage = async () => {
        const data = new FormData()
        data.append('file',imag)
        data.append('upload_preset','ImagesAdd')

        const text = await axios.post('https://api.cloudinary.com/v1_1/dwvnbejfd/image/upload', data)
        
        return text.data
    }


    const onSubmit = async(e) => {
        e.preventDefault()
        const url = await uploadImage()

        dispatch(postTask(name, url.url, description))
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

                    <input type='file' className={style.input} onChange={ e => setImag(e.target.files[0])}/>
                    {
                        name !== '' && description !== ''?
                        
                        <Button onClick={e=> onSubmit(e) } color='secondary' variant='contained'> 
                            <Link to='/' id={style.navLink} className={style.link}>
                                Add task
                            </Link>
                        </Button>:

                        <Button disabled onClick={e=> onSubmit(e) } color='secondary' variant='contained'> 
                            Add task
                        </Button>
                    }
                </form>
            </Container>
        </div>
    )
}
