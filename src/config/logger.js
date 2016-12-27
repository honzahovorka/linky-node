import bunyan from 'bunyan'

const logStreams = []

logStreams.push({
  level: 'debug',
  stream: process.stdout,
})

const logger = bunyan.createLogger({
  name: 'linky-node',
  streams: logStreams,
})

export default logger
