import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { putTask,  getTaskCompleted, getTaskPending, getUserId } from '../../action/action'
import { Checkbox, Accordion, AccordionDetails, AccordionSummary, Typography, Box } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function CardPending({_id, name, status, reference, img}) {

    const dispatch = useDispatch()
    const states = useSelector(state => state.Users)

    const handleChange = (e) => {

        e.preventDefault()
        dispatch(putTask(_id, {name, status: true, reference, img}))

        dispatch(getTaskCompleted())

        dispatch(getTaskPending())
    }
    
    useEffect(()=> {

        if(reference !== undefined || reference !== null){
            dispatch(getUserId(reference))
        }

    },[dispatch])

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
                        <Checkbox onChange={e => handleChange(e)}/>:
                        <Checkbox disabled checked/>

                    }
                    <Typography variant='h6' sx={{ width: '35%', flexShrink: 0, color: 'white' }}>
                        {name}
                    </Typography>
                    <Typography sx={{ width: '60%', color: 'white' }}>
                        Reference: {ref.length === 1 ? ref[0].firstName : null} {ref.length === 1 ? ref[0].lastName : null}
                    </Typography>

                </Box>
            </AccordionSummary>

            <AccordionDetails>

                <Typography sx={{color: 'white'}}>
                    Description: este es un prototipo
                </Typography>

            </AccordionDetails>

        </Accordion>
        
    )
}
