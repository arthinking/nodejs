res = db.query('select * from t_user');
res.output();

db.query('select * from t_user', function(res){
	res.output();
});
