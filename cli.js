#!/usr/bin/env node

const cli = require('sywac')
  .style(require('sywac-style-basic'))
  .outputSettings({ maxWidth: 100 })
  .showHelpByDefault()
  .boolean('-d, --diag', { desc: 'Diagnostic output.' })
  .help('-h, --help')
  .version('-v, --version')

module.exports = cli

if (require.main === module) {
  cli.parseAndExit().then(argv => {
    return require('./index')(argv)
  }).catch(err => {
    console.error('Unexpected error:', err)
    process.exit(1)
  })
}
