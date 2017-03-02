# Local mongodb

Quick POC using express and local mongodb.


## Configuring mongodb
Instructions to configure mongodb before running the `start` script

 - install mongodb locally
 - run mongodb specifying where you project `data` dir is is located, e.g:  `mongod  --dbpath /absolute_path/to_your_project`
 - you can also specify a port using the `--port` flag, e.g. `--port 27018`

## Debug
Use mongo REPL to debug in a shell `mongo`
Fire DB running `npm run db` after specifying your `--dbpath` or `mongod`
