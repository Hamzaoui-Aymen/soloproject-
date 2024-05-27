const express = require("express");
const cors = require("cors");
const PORT = 8080;
const app = express();
const db = require("./database/sequelize/index")
app.use(express.json());
app.use(cors());
const bikesRoute  = require ("./routes")
app.use("/api" , bikesRoute)


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
