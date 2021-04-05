import PointsController from './controllers/PointsController'
import {Router} from 'express'
import ItemsController from './controllers/ItemsController'

const routes = Router()
const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items',itemsController.index)

routes.post('/points', pointsController.Create)

routes.get('/points', pointsController.index)

routes.get('/points/:id', pointsController.show)



export default routes 