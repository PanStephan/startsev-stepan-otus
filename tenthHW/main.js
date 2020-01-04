const yargs = require('yargs')
const {detectRoute} = require('./createPathRoute')

yargs.command({
  command: 'tree',
  describe: 'find a folder route',
  builder: {
    path: {
      describe: '',
      type: 'string'
    }
  },
  handler: argv => {
    detectRoute(argv._[2])
  }
})

yargs.parse()