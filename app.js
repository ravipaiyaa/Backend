const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.json({
		msg: "Hello world of API",
	});
});

app.listen(3000);
