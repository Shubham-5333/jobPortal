import express from 'express'
const route = express.Router() 
import controller from '../controller/userController.js'


route.post('/register',controller.createUser)
route.post('/',controller.loginUser)
// route.get('/profile',controller.getProfile)


export default route