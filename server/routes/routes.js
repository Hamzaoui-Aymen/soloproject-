const bikesRoute = require("express").Router();
const controller = require("./controller.js");

bikesRoute.get("/getAllBikes", controller.getAllBikes);
bikesRoute.post("/add", controller.addBike);
bikesRoute.delete("/delete/:id", controller.deleteBike);
bikesRoute.put("/update/:id", controller.updateBike);

module.exports = bikesRoute;