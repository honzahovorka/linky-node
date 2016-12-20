import Router from 'koa-router'
import controllers from '../controllers'

const router = new Router()

router.get('/', controllers.PagesController.welcome)

export default router.routes()
