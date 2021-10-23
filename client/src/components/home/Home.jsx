import React from 'react'
import styleDefault from '../../styles/default.module.css'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

export default function Home() {
    return (
        <div className={styleDefault.content}>
            <Container maxWidth="1sm">
                <div className={styleDefault.gird}>

                    <div className={styleDefault.taskIncomplete}>
                        <p>1</p>
                        <Button variant="contained" style={{ backgroundColor: 'rgb(138, 3, 138)',color: 'white', margin: '2%', width: '80%'}}>
                            <AddOutlinedIcon fontSize="small"/> Add task
                        </Button>
                    </div>

                    <div className={styleDefault.taskComplete}>
                        <p>2</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
