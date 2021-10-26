import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { putTask } from '../../action/action'
import axios from 'axios'
import style from '../../styles/default.module.css'
import { Container, TextField, Button } from '@mui/material'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

export default function Edit() {

    const dispatch = useDispatch()
    const task = useSelector(state => state.Task)
    const [ img ] = useState(task.img)
    const [ url, setUrl] = useState([])
    const [ newName, setNewName ] = useState(task.name)
    const [ descrition, setDescription ] = useState(task.description)

    /// Subida de imagenes a cloudinary
    const upload = async (e) =>{

        const data = new FormData()
        data.append('file',e)
        data.append('upload_preset','ImagesAdd')

        const text = await axios.post('https://api.cloudinary.com/v1_1/dwvnbejfd/image/upload', data)
        
        
        if(img !== undefined){
            setUrl([...img ,...url, text.data.url])
        }
        else{
            setUrl([...url, text.data.url])
        }
        return text.data.url
    }

    /// Accion para cambiar los datos de la tarea
    const onSubmit = async (data) => {
        data.preventDefault()

        const newImg = JSON.stringify(url)
        
        dispatch(putTask(task._id,{name: newName, img: newImg, status: false, description: descrition}))
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

                <input type='file' className={style.input} onChange={ e => upload(e.target.files[0])}/>

                <Button onClick={(e)=> {onSubmit(e)} }color='secondary' variant='contained'> 
                    <Link to='/' id={style.navLink} className={style.link}>
                        Editar Tarea
                    </Link> 
                </Button>
            </form>
            {/* Pre view de imagenes */}
            <div id={style.divSecuense}> 
                <AwesomeSlider animation="cubeAnimation">
                    {
                        url?.map((e, index) => (
                            <div key={index} data-src={e} className={style.img}></div>
                        ))
                    }
                </AwesomeSlider>
            </div>
        </Container>
    )
}
