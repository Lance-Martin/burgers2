// var connection = require('./connection.js');
//
// var orm = {
//   selectAll: function(cb){
//     var queryString = 'SELECT * FROM burgers;';
// 		connection.query(queryString, function (err, result) {
// 			cb(result);
// 		});
//   },
//   insertOne: function (burger, devoured, cb){
//     var queryString = "INSERT INTO burgers (burger_name, devoured, date) VALUES ('"+burger+"',"+ devoured+", now());";
//     connection.query(queryString, function (err, res) {
//       if (err) throw err;
//       console.log(res);
//       cb(res);
// 		});
//   },
//   updateOne: function(selected, devour, cb){
//     var queryString = "UPDATE burgers SET devoured ="+ devour + " WHERE id = " +selected+";";
//     connection.query(queryString, function(err, res){
//       if(err) throw err;
//       cb(res);
//     });
//   }
// };
//
// module.exports = orm;
