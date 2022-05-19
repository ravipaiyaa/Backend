const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.json({
		msg: "Hello world of API this is Ravi Kumar First Deployment",
	});
});
//testing
app.listen(3000);
