var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Connected');
});

var getEmpObj = function (tablename,condition,field) {
	let seletQuery;
	if(field != null){
		
     seletQuery = "SELECT "+ field.join() +" FROM "+ tablename + ' ' +condition

	}
	else{
	
	   seletQuery = "SELECT * FROM "+ tablename + ' ' +condition

	
	}
    con.query(seletQuery, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
}
var argCondition = "WHERE name = 'rohini'";
var fields=["name","city"];
//getEmpObj('employee',argCondition,fields);


var insertEmpObj = function (tablename,values,field) {
	let insertQuery;
		
     insertQuery = "insert into "+ tablename + "(" + field.join() +")" +" values  " + "(" + values.join() + ")"


    con.query(insertQuery, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
}

var updateEmpObj = function (tablename,set_values,condition) {
	let insertQuery;
		
     insertQuery = "update  "+ tablename + " set " + set_values + " "+ condition


    con.query(insertQuery, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
}

var deleteEmpObj = function (tablename,condition) {
	let insertQuery;
		
     insertQuery = "delete  from "+ tablename + ' '+ condition


    con.query(insertQuery, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
}
//var city="trichy"
//updateEmpObj("employee","city='"+city + "'","WHERE name = 'rohini'");
//insertEmpObj('employee',['"god"','"madurai"'],['name','city']);
deleteEmpObj("employee","WHERE name = 'rohini'");