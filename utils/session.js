const sessionStore = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345678",
  connectionLimit:10,//number of connection can crate at once
  database: "taskdb",
  createDatabaseTable:true//create session table automatic with name session
};
module.exports = sessionStore;