import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function CardPending() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Checkbox defaultChecked />
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Task
                    </Typography>
                    <Typography>
                        Reference: alguien    
                    </Typography> 
                </AccordionSummary>
            </Accordion>
        </div>
    )
}
