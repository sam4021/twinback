require('./config');
//const mysql = require('mysql');
//const global = require('./global');

// const connection = mysql.createConnection({
//   host: CONFIG.db_host,
//   user: CONFIG.db_user,
//   password: CONFIG.db_password,
//   database: CONFIG.db_name
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });
//CREATE Database if not created
// connection.query('CREATE DATABASE IF NOT EXISTS '+global.DB_NAME, function (err) {
//     if (err) throw ('CREATE DB ERR'+err);
//     connection.query('USE '+global.DB_NAME, function (err) {
//         if (err) throw err;
//         //Create Client Table
//         connection.query('CREATE TABLE IF NOT EXISTS client('
//             + 'id INT NOT NULL AUTO_INCREMENT,'
//             + 'PRIMARY KEY(id),'
//             + 'firstname VARCHAR(30) NOT NULL,'
//             + 'lastname VARCHAR(30) NOT NULL,'
//             + 'surname VARCHAR(30) NOT NULL,'
//             + 'email VARCHAR(50),'
//             + 'phone VARCHAR(15),'
//             + 'dob DATE,'
//             + 'created TIMESTAMP NOT NULL'
//             +  ')', function (err) {
//                 if (err) throw ('Client :: '+err);
//             });

//         //CREATE staff
//         connection.query('CREATE TABLE IF NOT EXISTS staff('
//             + 'id INT NOT NULL AUTO_INCREMENT,'
//             + 'PRIMARY KEY(id),'
//             + 'firstname VARCHAR(30) NOT NULL,'
//             + 'lastname VARCHAR(30) NOT NULL,'
//             + 'surname VARCHAR(30) NOT NULL,'
//             + 'email VARCHAR(50),'
//             + 'phone VARCHAR(15),'
//             + 'dob DATE,'
//             + 'created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP'
//             +  ')', function (err) {
//                 if (err) throw ('Staff :: '+err);
//             });

//         //CREATE Mode of pay
//         connection.query('CREATE TABLE IF NOT EXISTS mode_of_pay('
//             + 'id INT NOT NULL AUTO_INCREMENT,'
//             + 'name VARCHAR(30),'
//             + 'created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,'
//             + 'PRIMARY KEY(id)'
//             +  ')', function (err) {
//                 if (err) throw ('Mode Of Pay :: '+err);
//             });    
           
//         //CREATE Cash Deposit
//         connection.query('CREATE TABLE IF NOT EXISTS cash_deposit('
//             + 'id INT NOT NULL AUTO_INCREMENT,'
//             + 'client_id INT(6) NOT NULL,'
//             + 'mode INT(6),'
//             + 'amount FLOAT,'
//             + 'created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,'
//             + 'PRIMARY KEY(id),'
//             + 'FOREIGN KEY (client_id) REFERENCES client(id),'
//             + 'FOREIGN KEY (mode) REFERENCES mode_of_pay(id)'
//             +  ')', function (err) { 
//                 if (err) throw ('Cash Deposit :: '+err);
//             });
            
//         //CREATE Cash Deposit MPESA
//         connection.query('CREATE TABLE IF NOT EXISTS cash_deposit_mpesa('
//             + 'id INT NOT NULL AUTO_INCREMENT,'
//             + 'cash_deposit_id INT(6) NOT NULL,'
//             + 'amount FLOAT,'
//             + 'transaction_id FLOAT,'
//             + 'created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,'
//             + 'PRIMARY KEY(id),'
//             + 'FOREIGN KEY (cash_deposit_id) REFERENCES cash_deposit(id)'
//             +  ')', function (err) { 
//                 if (err) throw ('Cash Deposit MPESA :: '+err);
//             });
            
//         //CREATE Cash Deposit BANK
//         connection.query('CREATE TABLE IF NOT EXISTS cash_deposit_bank('
//             + 'id INT NOT NULL AUTO_INCREMENT,'
//             + 'cash_deposit_id INT(6) NOT NULL,'
//             + 'amount FLOAT,'
//             + 'transaction_id FLOAT,'
//             + 'created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,'
//             + 'PRIMARY KEY(id),'
//             + 'FOREIGN KEY (cash_deposit_id) REFERENCES cash_deposit(id)'
//             +  ')', function (err) { 
//                 if (err) throw ('Cash Deposit Bank :: '+err);
//             });   
            
//         //CREATE Cash Withdrawal Request
//         connection.query('CREATE TABLE IF NOT EXISTS cash_withdrawal_request('
//             + 'id INT NOT NULL AUTO_INCREMENT,'
//             + 'client_id INT(6) NOT NULL,'
//             + 'amount FLOAT,'
//             + 'created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,'
//             + 'PRIMARY KEY(id),'
//             + 'FOREIGN KEY (client_id) REFERENCES client(id)'
//             +  ')', function (err) { 
//                 if (err) throw ('Cash Withdrawal Request :: '+err);
//             });  
            
//         //CREATE Cash Withdrawal Request Status
//         connection.query('CREATE TABLE IF NOT EXISTS cash_withdrawal_request_status('
//             + 'id INT NOT NULL AUTO_INCREMENT,'
//             + 'cash_withdrawal_request_id INT(6) NOT NULL,'
//             + 'staff_id INT(6) NOT NULL,'
//             + 'status VARCHAR(15),'
//             + 'created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,'
//             + 'PRIMARY KEY(id),'
//             + 'FOREIGN KEY (cash_withdrawal_request_id) REFERENCES cash_withdrawal_request(id),'
//             + 'FOREIGN KEY (staff_id) REFERENCES staff(id)'
//             +  ')', function (err) { 
//                 if (err) throw ('Cash Withdrawal Request Status :: '+err);
//             }); 
            
//         //CREATE Cash Withdrawal
//         connection.query('CREATE TABLE IF NOT EXISTS cash_withdrawal('
//             + 'id INT NOT NULL AUTO_INCREMENT,'
//             + 'cash_withdrawal_request_id INT(6) NOT NULL,'
//             + 'staff_id INT(6) NOT NULL,'
//             + 'mode INT(6),'
//             + 'amount FLOAT,'
//             + 'created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,'
//             + 'PRIMARY KEY(id),'
//             + 'FOREIGN KEY (cash_withdrawal_request_id) REFERENCES cash_withdrawal_request(id),'
//             + 'FOREIGN KEY (staff_id) REFERENCES staff(id),'
//             + 'FOREIGN KEY (mode) REFERENCES mode_of_pay(id)'
//             +  ')', function (err) { 
//                 if (err) throw ('Cash Withdrawal :: '+err);
//             });   
            
//         //CREATE Cash Withdrawal MPESA
//         connection.query('CREATE TABLE IF NOT EXISTS cash_withdrawal_mpesa('
//             + 'id INT NOT NULL AUTO_INCREMENT,'
//             + 'cash_withdrawal_id INT(6) NOT NULL,'
//             + 'amount FLOAT,'
//             + 'transaction_id FLOAT,'
//             + 'created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,'
//             + 'PRIMARY KEY(id),'
//             + 'FOREIGN KEY (cash_withdrawal_id) REFERENCES cash_withdrawal(id)'
//             +  ')', function (err) { 
//                 if (err) throw ('Cash Withdrawal MPESA :: '+err);
//             }); 
            
//         //CREATE Cash Withdrawal BANK
//         connection.query('CREATE TABLE IF NOT EXISTS cash_withdrawal_bank('
//             + 'id INT NOT NULL AUTO_INCREMENT,'
//             + 'cash_withdrawal_id INT(6) NOT NULL,'
//             + 'amount FLOAT,'
//             + 'transaction_id FLOAT,'
//             + 'created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,'
//             + 'PRIMARY KEY(id),'
//             + 'FOREIGN KEY (cash_withdrawal_id) REFERENCES cash_withdrawal(id)'
//             +  ')', function (err) { 
//                 if (err) throw ('Cash Withdrawal Bank :: '+err);
//             }); 
            
//         //CREATE Permissions Group
//         connection.query('CREATE TABLE IF NOT EXISTS permissions_group('
//             + 'id INT NOT NULL AUTO_INCREMENT,'
//             + 'title VARCHAR(30) NOT NULL,'
//             + 'created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,'
//             + 'PRIMARY KEY(id)'
//             +  ')', function (err) { 
//                 if (err) throw ('Permissions Group :: '+err);
//             });     
             
//         //CREATE Permissions Child
//         connection.query('CREATE TABLE IF NOT EXISTS permissions_child('
//             + 'id INT NOT NULL AUTO_INCREMENT,'
//             + 'title VARCHAR(30) NOT NULL,'
//             + 'created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,'
//             + 'PRIMARY KEY(id)'
//             +  ')', function (err) { 
//                 if (err) throw ('Permissions Child :: '+err);
//             });      

//         //CREATE Permissions Group-Child
//         connection.query('CREATE TABLE IF NOT EXISTS permissions_group_child('
//             + 'id INT NOT NULL AUTO_INCREMENT,'
//             + 'permissions_group_id INT(6) NOT NULL,'
//             + 'permissions_child_id INT(6) NOT NULL,'
//             + 'created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,'
//             + 'PRIMARY KEY(id),'
//             + 'FOREIGN KEY (permissions_group_id) REFERENCES permissions_group(id),'
//             + 'FOREIGN KEY (permissions_child_id) REFERENCES permissions_child(id)'
//             +  ')', function (err) { 
//                 if (err) throw ('Permissions Group-Child :: '+err);
//             });          
//     });
// });
