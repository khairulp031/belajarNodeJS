# belajarNodeJS

> npm i nodemon -g
> npm install
> npm start


------

mongod.conf:
-----------------------
systemLog:
    destination: file
    path: C:\Users\khairulanshar\Documents\mongodata\mongo.log
    logAppend: true
storage:
    dbPath: C:\Users\khairulanshar\Documents\mongodata\data
net:
    port: 27017
    bindIp: 127.0.0.1, 10.211.55.4
-----------------------
security:
    authorization: "enabled"
-----------------------

"C:\Program Files\MongoDB\Server\4.4\bin\mongod" --config "C:\Users\khairulanshar\Documents\mongodata\mongod.conf"
"C:\Program Files\MongoDB\Server\4.4\bin\mongo" "mongodb://127.0.0.1:27017"

use belajardb
db.createUser({
    user: "admin",
    pwd: "test123",
    roles: [{role:"dbOwner", db:"belajardb"}],
    passwordDigestor:"server"
})

db.createUser({
    user: "test",
    pwd: "test456",
    roles: [{role:"dbOwner", db:"belajardb"}],
    passwordDigestor:"server"
})


"C:\Program Files\MongoDB\Tools\100\bin\mongodump" --uri="mongodb+srv://admin:test123@cluster0.ttujf.mongodb.net/sample_training"
"C:\Program Files\MongoDB\Tools\100\bin\mongorestore" --host=127.0.0.1 --port=27017 --authenticationDatabase="belajardb" -u="admin" -p="test123" ./dump/

