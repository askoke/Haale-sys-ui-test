import mysql from 'mysql2/promise';

// Made database login data more dynamic

console.log("create connection");
const connection = mysql.createPool({
    host: 'localhost',
    port: {PORT},
    user: {USER},
    password: {PASSWORD},
    database: {DATABASE},
});

// console.log("try query");
// console.log(await connection.query('select Tulemuse_id from TULEMUSEDs;'));
// console.log("end");
// await connection.end();

export default connection;
