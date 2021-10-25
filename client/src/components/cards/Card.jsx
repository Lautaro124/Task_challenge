import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from '../../styles/default.module.css'
import swal from 'sweetalert'
import { putTask,  getTaskCompleted, getTaskPending, taskEdit } from '../../action/action'
import { Checkbox, Accordion, AccordionDetails, AccordionSummary, Typography, Box, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default function CardPending({_id, name, status, description, img}) {

    const dispatch = useDispatch()
    const user = useSelector(state => state.User)
    const arrImg = JSON.parse(img)

    const handleChange = (e) => {

        e.preventDefault()
        swal({
            title: 'Tarea completada',
            text: 'Estas seguro/a de checkear esta tarea? Una vez checkeada no hay vuelta a tras',
            icon: 'info',
            buttons: true,
            dangerMode: true,
        }).then( () => {

            dispatch(putTask(_id, {name, status: true, description, img}))
    
            dispatch(getTaskCompleted())
            dispatch(getTaskPending())
        }).catch(() => {
            swal({
                title: 'Tarea no completada',
                text: 'Aveces no aceptar puede servir, pero no lo hagas conmigo :,D',
                icon: 'success',
                buttons: 'Aceptar'
            })
        })
    }

    
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
                        <Checkbox onChange={e => handleChange(e)} sx={{color: 'white'}}/>:
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
                    <div className={style.imgConten}>

                       <AwesomeSlider>
                            {    
                                arrImg?.map((e, index) => (
                                    
                                    <div key={index} data-src={e} className={style.img}></div>
                                ))
                            }

                        </AwesomeSlider> 
                    </div>
                    
                    
                    <Typography variant='span' sx={{color: 'white' }}>
                        Descripción: {' '+ description}
                    </Typography>
                    
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
                                     Edit task
                                </Link>
                            </Button>:
                        null

                    }
                </div>

            </AccordionDetails>

        </Accordion>
        
    )
}
