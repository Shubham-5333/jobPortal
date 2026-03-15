import express from 'express'
const route = express.Router()
import userController from '../controller/userController.js'
import jobsController from '../controller/jobsController.js'
import auth from '../middlewares/auth.js'


route.post('/register', userController.createUser)
route.post('/', auth.isLogin, userController.loginUser)// route.get('/profile',controller.getProfile)
route.get('/profile', userController.getProfile)
route.post('/profile/update', userController.profileUpdate)
route.get('/joblisting', jobsController.joblisting)



export default route