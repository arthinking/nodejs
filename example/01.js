res = db.query('select * from some_table');
res.output();
db.query('select * from some_table', function(res){
	res.output();
});
