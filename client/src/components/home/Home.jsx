import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styleDefault from '../../styles/default.module.css'
import { Container, Button, Typography} from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import Card from '../cards/Card'

export default function Home() {

    const user = useSelector(state => state.User)
    const task_complete = useSelector(state => state.Task_complete)
    const task_pending = useSelector(state => state.Task_pending)

    return (
        <div className={styleDefault.content}>
            <Container maxWidth='1sm'>
                <div className={styleDefault.gird}>
                    <div className={styleDefault.taskIncomplete}>

                        <Typography variant='h4' sx={{ margin: 2, color: 'white' }} >
                            Task Pending
                        </Typography>

                        {
                            task_pending?.map((e, index) =>(

                                <Card 
                                    key={index}
                                    _id={e._id}
                                    name={e.name} 
                                    reference={e.reference? e.reference: null} 
                                    status={e.status}
                                    img={e.img} 
                                />
                            ))
                        }

                        {
                            user.firstName?
                                <Link to='/addCard' className={styleDefault.link}>
                                
                                    <Button 
                                        variant='contained' 
                                        style={{ backgroundColor: 'rgb(138, 3, 138)',color: 'white', margin: '2%', width: '80%'}}
                                    >
                                        <AddOutlinedIcon fontSize='small'/> Add task
                                    </Button>
                                </Link>:
                                null
                        }

                    </div>

                    <div className={styleDefault.taskComplete}>

                        <Typography variant='h4' sx={{ margin: 2, color: 'white' }} >
                            Task Completed
                        </Typography>

                        {
                            task_complete?.map((e, index)=> (


                                <Card 
                                    key={index}
                                    name={e.name} 
                                    reference={e.reference} 
                                    status={e.status}
                                    img={e.img}
                                />
                            ))
                        }

                    </div>
                </div>
            </Container>
        </div>
    )
}
