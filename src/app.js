import Koa from 'koa'
import routes from './routes'

const app = new Koa()

app.use(routes)

app.start = () => app.listen(3000)

export default app
