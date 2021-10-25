import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from '../../styles/default.module.css'
import { putTask,  getTaskCompleted, getTaskPending, taskEdit } from '../../action/action'
import { Checkbox, Accordion, AccordionDetails, AccordionSummary, Typography, Box, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function CardPending({_id, name, status, description, img}) {

    const dispatch = useDispatch()
    const user = useSelector(state => state.User)

    const handleChange = async (e) => {

        e.preventDefault()
        await dispatch(putTask(_id, {name, status: true, description, img}))
        dispatch(getTaskCompleted())
        dispatch(getTaskPending())
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
                     
                    <img className={style.img} src={img}/>
                    
                    
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
