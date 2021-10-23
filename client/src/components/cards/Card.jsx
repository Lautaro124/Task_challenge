import React from 'react'
import { useDispatch } from 'react-redux'
import { putTask,  getTaskCompleted, getTaskPending } from '../../action/action'
import Checkbox from '@mui/material/Checkbox'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Box from '@mui/material/Box'

export default function CardPending({_id, name, status, reference, img}) {

    const dispatch = useDispatch()

    const handleChange = (e) => {

        e.preventDefault()
        dispatch(putTask(_id, {name, status: true, reference, img}))

        dispatch(getTaskCompleted())

        dispatch(getTaskPending())
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
                        <Checkbox onChange={e => handleChange(e)}/>:
                        <Checkbox disabled checked/>

                    }
                    <Typography variant='h6' sx={{ width: '35%', flexShrink: 0, color: 'white' }}>
                        {name}
                    </Typography>

                    <Typography sx={{ width: '60%', color: 'white' }}>
                        Reference: {reference}
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
