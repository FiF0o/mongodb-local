# Local mongodb

Quick POC using express and local mongodb.


## Configuring mongodb
Instructions to configure mongodb before running the `start` script

 - install mongodb locally
 - run mongodb specifying where you project `data` dir is is located, e.g:  `mongod  --dbpath /absolute_path/to_your_project`
 - you can also specify a port using the `--port` flag, e.g. `--port 27018`

## Debug
Use mongo REPL to debug in a shell `mongo`.</br>
Fire DB running `npm run db` after specifying your `--dbpath` or `mongod`.</br>
Retrieves `documents` collection from the `mongoT` DB, run `db.documents.find()` in the REPL.

## Mongo DB
Fires the app running `npm start`.</br>
`db.js` opens up a db connection locally on default mongodb port (`27017`).</br>
A `mongoT` DB is created storing a `documents` collection.</br>
App runs on port `:3000` and accepts document(s) to be inserted on `/:something` route. Be careful it will return your DB collection on that route.

## Improvements
- Add unit tests
- Add badges
