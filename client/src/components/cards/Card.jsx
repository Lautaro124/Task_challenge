import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from '../../styles/default.module.css'
import { putTask,  getTaskCompleted, getTaskPending } from '../../action/action'
import { Checkbox, Accordion, AccordionDetails, AccordionSummary, Typography, Box, Autocomplete, TextField, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function CardPending({_id, name, status, reference, img}) {

    const dispatch = useDispatch()
    const states = useSelector(state => state.Users)
    const user = useSelector(state => state.User)

    const handleChange = async (e) => {

        await dispatch(putTask(_id, {name, status: e.target.checked, reference: user._id, img}))
        dispatch(getTaskCompleted())
        dispatch(getTaskPending())
    }

    let arrDemo = states.map(e => e.firstName + ' ' + e.lastName)
    let ref = states.filter(e => e._id === reference)

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
                    <Typography variant='h6' sx={{ width: '35%', flexShrink: 0, color: 'white' }}>
                        {name}
                    </Typography>
                    
                    {
                        !status?
                        user.firstName?
                        <Autocomplete
                            disablePortal
                            options={arrDemo}
                            sx={{ width: '100%'}}
                            id='combo-box-demo'
                            renderInput={(params) => 
                                <TextField 
                                    {...params} 
                                    InputLabelProps={{className: style.text}}
                                    variant='filled'
                                    label= {ref.length === 1 ? ref[0].firstName : 'Add reference'} 
                                />
                            }
                            onChange={e => console.log(e)}
                        />:
                        <Typography variant='span' sx={{ width: '35%', flexShrink: 0, color: 'white' }}>
                            {ref.length === 1 ? 'Reference: '+ ref[0].firstName : 'Add reference'}
                        </Typography>:
                        <Typography variant='span' sx={{ width: '35%', flexShrink: 0, color: 'white' }}>
                            { 'Reference: '+ ref[0]?.firstName }
                        </Typography>
                    }

                </Box>
            </AccordionSummary>

            <AccordionDetails>
                <div className={style.display}>
                     
                    <img className={style.img} src={img}/>
                        
                    {
                        user.firstName && !status?
                        <Button sx={{ height: '70%'}} color='secondary' variant='contained'>Edit task</Button>:
                        null

                    }
                </div>

            </AccordionDetails>

        </Accordion>
        
    )
}
