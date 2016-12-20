import Koa from 'koa'

const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello, world!'
})

app.start = () => app.listen(3000)

export default app
