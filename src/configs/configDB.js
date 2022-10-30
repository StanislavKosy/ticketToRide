const {Client} = require('pg')
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5433,
    password: "root",
    database: "postgres"
})

client.connect();

client.query(`Insert into users (firstname, lastname) values ('natasha', 'kosy')`, (err) => {
    if(err) {
        console.log(err.message)
        client.end;
    }
})

client.query(`Select * from users`, (err, res) => {
    if(!err) {
        console.log(res.rows);
    } else {
        console.log(err.message)
    }
    client.end;
})