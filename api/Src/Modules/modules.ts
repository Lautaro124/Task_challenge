import { model } from 'mongoose'
import Users from './Schemas/User'
import Tasks from './Schemas/Tasks'

export const UserModel = model('users', Users) 
export const TaskModel = model('tasks', Tasks)