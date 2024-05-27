const { Sequelize, DataTypes } = require("sequelize");

// create a database connection in your application using a Sequelize instance and the config file
const connection = new Sequelize(
  "rentbikes",
  "root",
  "Aymen@2003",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

//verify your connection here !

// create your table using sequelize
module.exports = (connection, DataTypes) => {
  const User = connection.define(
    "user",
    {
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true 
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true 
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      },
    },
  );
  return User;
};

const schemaBikes = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  available: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
};

const User = connection.define('user', schemaUser);
const Bikes = connection.define('bikes', schemaBikes);

User.hasMany(Bikes, { as: 'bike', foreignKey: 'userId' });
Bikes.belongsTo(User, { as: 'user', foreignKey: 'userId' });


connection.authenticate()
  .then(() => {
    console.log('Database Connected');
  })
  .catch((err) => {
    console.log(err);
  });

// connection
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database and tables created!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const db = {
  connection,
  Sequelize,
  User,
  Bikes,
};

const fetchBikes = () => {
  return Bikes.findAll({
    include: [{
      model: User,
      as: 'user'
    }]
  });
};

const save = (data) => {
  return Bikes.create(data);
};

const delet = (id) => {
  return Bikes.destroy({ where: { id } });
};

const update = (id, data) => {
  return Bikes.update(data, { where: { id } });
};

const getOne = (id) => {
  return Bikes.findByPk(id, { include: [{ model: Bikes, as: 'bike' }] });
};

module.exports = { fetchBikes, save, delet, update, getOne };