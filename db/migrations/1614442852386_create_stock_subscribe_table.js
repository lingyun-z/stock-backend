module.exports = {
  up: `CREATE TABLE STOCK_SUBSCRIBE (
    STOCK_ID CHAR(32) PRIMARY KEY,
    DISABLE BOOLEAN
  );`,
  down: `DROP TABLE STOCK_SUBSCRIBE;`,
};
