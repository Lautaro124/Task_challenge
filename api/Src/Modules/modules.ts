import { model } from 'mongoose'
import Users from './Schemas/User'
import Tasks from './Schemas/Tasks'

export const UserModel = model('Users', Users) 
export const TaskModel = model('Tasks', Tasks)
