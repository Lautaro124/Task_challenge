import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import style from '../../styles/default.module.css'
import { postTask } from '../../action/action'
import { Container, TextField, Checkbox, Typography, Button } from '@mui/material'
import axios from 'axios'

export default function Create() {

    const dispatch = useDispatch()
    const user = useSelector(state => state.User)
    const [ imag, setImag ] = useState('')
    const [ name, setName ] = useState('')
    const [ reference, setReference ] = useState(null)

    const uploadImage = async () => {
        const data = new FormData()
        data.append('file',imag)
        data.append('upload_preset','ImagesAdd')

        const text = await axios.post('https://api.cloudinary.com/v1_1/dwvnbejfd/image/upload', data)
        
        return text.data
    }

    const detectedRef = (e) => {

        if(e){
            setReference(user._id)
        }
    }

    const onSubmit = async(e) => {
        e.preventDefault()
        const url = await uploadImage()

        dispatch(postTask(name, url.url, reference))
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
                    <Button onClick={e=> onSubmit(e) }color='secondary' variant='contained'> Add task</Button>
                </form>
            </Container>
        </div>
    )
}
