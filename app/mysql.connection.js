import mysql from "mysql2";

function init() {
  const connection = mysql.createConnection({
    host: "mysqllocal.s4ds.com",
    user: "development",
    password: "Solutions2023#",
    database: "DEMOSV_CORE",
  });
  connection.connect();
  return connection;
}

export function getOrderDetails() {
  const mysqlClient = init();
  const query = "SELECT * FROM or_order_details WHERE orderid = 114116";
  const results = new Promise((resolve, reject) => {
    mysqlClient.query(query, function (err, results, fields) {
      resolve(results[0]);
    });
  });
  return results;
}
