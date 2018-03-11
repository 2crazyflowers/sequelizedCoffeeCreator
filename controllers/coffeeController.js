var db = require("../models");
module.exports = function(app) {

	app.get("/", function(req, res) {
		db.Coffee.findAll({}).then(function(dbCoffee) {
			res.json(dbCoffee);
		});
	});

	app.post("/api/coffee", function(req,res) {
		console.log(req.body);
		db.Coffee.create({
			name:req.body.text,
			drank: req.body.drank
		}).then(function(dbCoffee) {
			res.json(dbCoffee);
		});
	});

	app.put("/api/coffee/:id", function(req, res) {
		db.Coffee.update({
			name:req.body.name,
			drank:req.body.drank
		}, {
			where: {
				id: req.body.id
			}
		}).then(function(dbCoffee) {
			res.json(dbCoffee);
		}).catch(function(err) {
			res.json(err);
		});
	});

	app.delete("/api/coffee/:id", function(req, res) {
		db.Coffee.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(dbCoffee) {
			res.json(dbCoffee);
		});
	});
}


// router.get("/", function(req, res) {
// 	coffee.all(function(data) {
// 		var hbsObject = {
// 			coffee: data
// 		};
// 		console.log(hbsObject);
// 		res.render("index", hbsObject);
// 	});
// });
// router.post("/api/coffee", function(req, res) {
// 	coffee.create([
// 		"name", "drank"
// 	], [
// 		req.body.name, false
// 	], function(result) {
// 		res.json({ id: result.insertId });
// 	});
// });
// router.put("/api/coffee/:id", function(req, res) {
// 	var condition = "id = " + req.params.id;
// 	console.log("condition", condition);
// 	coffee.update({
// 		drank: req.body.drank
// 	}, condition, function(result) {
// 		if (result.changedRows == 0) {
// 			return res.status(404).end();
// 		} else {
// 			res.status(200).end();
// 		}
// 	});
// });
// router.delete("/api/coffee/:id", function(req, res) {
// 	var condition = "id = " + req.params.id;
// 	coffee.delete(condition, function(result) {
// 		if (result.affectedRows == 0) {
// 			return res.status(404).end();
// 		} else {
// 			res.status(200).end();
// 		}
// 	});
// });
// module.exports = router;