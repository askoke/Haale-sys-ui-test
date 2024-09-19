import mysql from 'mysql2/promise';

console.log("create connection");
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: "askoita22_haale_admin",
    password: "qwertyqwertyqwerty",
    database: "askoita22_haaletamine_AB",
});

// console.log("try query");
// console.log(await connection.query('select Tulemuse_id from TULEMUSEDs;'));
// console.log("end");
// await connection.end();

export default connection;