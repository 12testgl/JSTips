import DbConnection from './DbConnection.js';

const dbInstance = DbConnection.getInstance();

const dbInstance2 = DbConnection.getInstance();


// Example query:
const results = dbInstance.connection.query('SELECT * FROM users');
console.log(results);