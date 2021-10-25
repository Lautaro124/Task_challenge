import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from '../../styles/default.module.css'
import { putTask,  getTaskCompleted, getTaskPending } from '../../action/action'
import { Checkbox, Accordion, AccordionDetails, AccordionSummary, Typography, Box, Autocomplete, TextField, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function CardPending({_id, name, status, reference, img}) {

    const dispatch = useDispatch()
    const states = useSelector(state => state.Users)

    const handleChange = (e) => {

        dispatch(putTask(_id, {name, status: e.target.checked, reference, img}))

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
                        <Checkbox onChange={e => handleChange(e)} sx={{color: 'white'}}/>:
                        <Checkbox disabled checked/>

                    }
                    <Typography variant='h6' sx={{ width: '35%', flexShrink: 0, color: 'white' }}>
                        {name}
                    </Typography>
                    
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
                    />

                </Box>
            </AccordionSummary>

            <AccordionDetails>
                <div className={style.display}>
                    {
                        img?
                        <img className={style.img} src={img}/>:
                        <Typography variant='h6' sx={{ width: '35%', flexShrink: 0, color: 'white' }}>
                            No image
                        </Typography>
                    }
                    <Button sx={{ height: '70%'}} color='secondary' variant='contained'>Edit task</Button>
                </div>

            </AccordionDetails>

        </Accordion>
        
    )
}
