

module.exports = {
  client: "sqlite3",
  connection: {
    //points to location of our database file
    filename: "./data/car-dealer.db3"
  },
  //required for SQLite for dealing with null values
  useNullAsDefault: true
};
