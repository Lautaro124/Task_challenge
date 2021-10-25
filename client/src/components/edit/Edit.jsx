import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { putTask } from '../../action/action'
import axios from 'axios'
import style from '../../styles/default.module.css'
import { Container, TextField, Typography, Button, Autocomplete } from '@mui/material'

export default function Edit() {

    const dispatch = useDispatch()
    const task = useSelector(state => state.Task)

    const [ img, setImg] = useState(task.img)
    const [ newName, setNewName ] = useState(task.name)
    const [ descrition, setDescription ] = useState(task.description)

    const upload = async () =>{
        const data = new FormData()
        data.append('file',img)
        data.append('upload_preset','ImagesAdd')

        const text = await axios.post('https://api.cloudinary.com/v1_1/dwvnbejfd/image/upload', data)
        
        return text.data.url
    }

    const onSubmit = async (data) => {
        data.preventDefault()

        if(img !== task.img){

            const newImg = await upload()

            dispatch(putTask(task._id,{name: newName, img: newImg, status: false, descrition}))
        }
        else{
            
            dispatch(putTask(task._id,{name: newName, img , status: false, descrition}))
        }
    }

    return (
        <Container maxWidth='1sm'>
            <form className={style.form}>

                <TextField 
                    fullWidth
                    color='secondary'
                    sx={{ backgroundColor: 'rgb(61, 61, 61)' }} 
                    InputLabelProps={{className: style.text}}
                    InputProps={{className: style.text}}
                    id='outlined-required' 
                    label={'Name: '+task.name} 
                    variant='filled' 
                    onChange={e => setNewName(e.target.value)}
                />

                <TextField 
                    fullWidth
                    color='secondary'
                    sx={{ backgroundColor: 'rgb(61, 61, 61)' }} 
                    InputLabelProps={{className: style.text}}
                    InputProps={{className: style.text}}
                    id='outlined-required' 
                    label={'Descripción: '+task.description} 
                    variant='filled' 
                    onChange={e => setDescription(e.target.value)}
                />

                <input type='file' className={style.input} onChange={ e => setImg(e.target.files[0])}/>

                <Button onClick={(e)=> {onSubmit(e)} }color='secondary' variant='contained'> 
                    <Link to='/' id={style.navLink} className={style.link}>
                        Add task
                    </Link> 
                </Button>
            </form>
        </Container>
    )
}
