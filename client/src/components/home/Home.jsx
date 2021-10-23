import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTaskCompleted, getTaskPending } from '../../action/action'
import styleDefault from '../../styles/default.module.css'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import Card from '../cards/Card'
import Typography from '@mui/material/Typography'

export default function Home() {

    const dispatch = useDispatch()
    const task_complete = useSelector(state => state.Task_complete)
    const task_pending = useSelector(state => state.Task_pending)

    useEffect(()=>{

        dispatch(getTaskPending())
        dispatch(getTaskCompleted())

    },[dispatch])

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
                                    reference={e.reference} 
                                    status={e.status}
                                    img={e.img} 
                                />
                            ))
                        }
                        <Button 
                            variant='contained' 
                            style={{ backgroundColor: 'rgb(138, 3, 138)',color: 'white', margin: '2%', width: '80%'}}
                        >
                            <AddOutlinedIcon fontSize='small'/> Add task
                        </Button>
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
