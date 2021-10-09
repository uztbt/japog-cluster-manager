import yargs from 'yargs'
import { hideBin } from 'yargs/helpers';
import express from 'express';

yargs(hideBin(process.argv))
  .command(
    'serve [port]',
    'start the server',
    yargs => yargs.positional('port', {
      describe: 'port to bind on',
      default: 5000
    }),
    argv => {
      const app = express();
      app.listen(argv.port, () => {
        initLog(argv);
      })
    })
  .option('usCentralUrl', {
    alias: 'us-central-url',
    type: 'string',
    describe: 'URL of the node in the us-central region'
  })
  .demandOption(['usCentralUrl'], 'Please provide the urls of your JaPong nodes.')
  .help()
  .parse();

function initLog(argv: yargs.Arguments) {
  console.log(`Listening at ${argv.port}`);
  console.log(`us-central-url: ${argv.usCentralUrl}`);
}