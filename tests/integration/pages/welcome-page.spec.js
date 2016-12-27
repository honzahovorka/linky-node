import { expect } from 'chai'
import request from 'supertest-koa-agent'
import app from '../../../src/app'

describe('Pages', () => {
  context('GET /', () => {
    it('returns hello world message', async () => {
      const res = await request(app).get('/').expect(200)

      expect(res.body).to.include.keys(['message'])
      expect(res.body.message).to.eq('Hello, world!')
    })
  })
})
