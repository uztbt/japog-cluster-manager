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
      // const app = express();
      console.log(`hello world, argv.port = ${argv.port}, argv.usCentralUrl = ${argv.usCentralUrl}`);
    })
  .option('usCentralUrl', {
    alias: 'us-central-url',
    description: 'URL of the node in the us-central region'
  })
  .demandOption(['usCentralUrl'], 'Please provide the urls of your JaPong nodes.')
  .help()
  .parse();