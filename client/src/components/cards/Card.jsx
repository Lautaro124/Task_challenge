import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from '../../styles/default.module.css'
import swal from 'sweetalert'
import { putTask, taskEdit, getTaskCompleted, getTaskPending } from '../../action/action'
import { Checkbox, Accordion, AccordionDetails, AccordionSummary, Typography, Box, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

export default function CardPending({_id, name, status, description, img}) {

    const dispatch = useDispatch()
    const user = useSelector(state => state.User)
    const [ check, setCheck ] = useState(false)
    const arrImg = img? JSON.parse(img) : null

    const handleChange = (e) => {

        e.preventDefault()
        swal({
            title: 'Proceso de completado',
            text: 'Estas seguro/a de checkear esta tarea? Una vez checkeada no hay vuelta a tras',
            icon: 'info',
            buttons: true,
            dangerMode: true,
        }).then( (verify) => {
            
            if(verify){

                const imag = img? img: '[]'
                dispatch(putTask(_id, {name, status: true, img: imag, description}))
                setCheck(true)
            }else{

                setCheck(false)
                swal({
                    title: 'Tarea no completada',
                    text: 'Aveces no aceptar puede servir, pero no lo hagas conmigo :,D',
                    icon: 'info',
                    buttons: 'Aceptar'
                })
            }

        }).catch(() => {

            setCheck(false)
            swal({
                title: 'ERROR!!',
                text: 'oh no, ocurrio algo inesperado',
                icon: 'error',
                buttons: 'Aceptar'
            })
        })
    }

    useEffect( ()=> {

        dispatch(getTaskPending())
        dispatch(getTaskCompleted())

    },[check])

    
    const send = async (e) => {
        
        e.preventDefault()
        await dispatch(taskEdit({_id, name, status, description, img}))
    }

    return (
        <Accordion style={{ backgroundColor: 'rgb(61, 61, 61)', width: '98%', margin: 'auto'}}>
            
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1bh-content'
                id='panel1bh-header'
            >
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '80%'}}>

                    {
                        !status?
                        !!user.firstName?
                        <Checkbox checked={check} onChange={e => handleChange(e)} sx={{color: 'white'}}/>:
                        <Checkbox disabled/>:
                        <Checkbox disabled checked/>
                    }

                    <Typography variant='h6' sx={{ width: '50%', flexShrink: 0, color: 'white' }}>
                        {name}
                    </Typography>

                </Box>
            </AccordionSummary>

            <AccordionDetails>
                <div className={style.display}>

                    {
                        img?

                        <div className={style.imgConten}>
                        <AwesomeSlider>
                                {    
                                    arrImg?.map((e, index) => (
                                        
                                        <div key={index} data-src={e} className={style.img}></div>
                                    ))
                                }

                            </AwesomeSlider> 
                        </div>:
                        null
                    }
                    
                    {
                        img?
                        <Typography variant='span' sx={{ gridRow: '1', gridColumn: '1', width: '100%', height: '100%', color: 'white' }}>
                            Descripción: {' '+ description}
                        </Typography>:

                        <Typography variant='span' sx={{ gridRow: '1', gridColumn: '1/3', width: '100%', height: '100%', color: 'white' }}>
                            Descripción: {' '+ description}
                        </Typography>

                    }
                    
                    {
                        user.firstName && !status?

                            <Button 
                                onClick={(e) => {
                                    send(e)
                                }}
                                sx={{ 
                                    height: '100%', 
                                    width: '100%',
                                    gridRow: '2', 
                                    gridColumn: '1/3'
                                }} 
                                color='secondary' 
                                variant='contained'
                            >
                                <Link  
                                    to='/edit' 
                                    className={style.link}
                                    id={style.navLink}
                                >
                                    Editar tarea
                                </Link>
                            </Button>:
                        null

                    }
                </div>

            </AccordionDetails>

        </Accordion>
        
    )
}
