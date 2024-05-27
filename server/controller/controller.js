const db = require("../database/sequelize/index");

module.exports.getAllBikes = async (req, res) => {
  try {
    const bikes = await db.fetchBikes().then(data => {
      console.log("Fetched data:", data);
      res.status(200).json(data);
    }).catch(error => {
      console.error("Error fetching data:", error);
      throw error;
    });

    console.log(bikes);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.addBike = async (req, res) => {
  const data = req.body;
  try {
    const newBike = await db.save(data);
    console.log("New bike added:", newBike);
    res.status(201).json(newBike);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.deleteBike = async (req, res) => {
  const id = req.params.id;
  try {
    await db.delet(id);
    res.send('Data deleted');
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.updateBike = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    await db.update(id, data);
    res.status(201).send('Data updated');
  } catch (error) {
    res.status(500).json(error);
  }
};
