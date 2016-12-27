import Koa from 'koa'
import routes from './routes'
import log from './config/logger'

const app = new Koa()

app.use(routes)

app.start = () => app.listen(3000, () => log.info('==> 🌎  Server listening on port 3000'))

export default app
