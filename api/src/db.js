require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

//test de conexión
/* 
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(error => console.log('Unable to connect to the database:', error)) */

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Inyectamos la conexión (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Videogames, Genres } = sequelize.models;

//creo valores de prueba para la DB
/* const newGame = {
  name: 'Danielito Game',
  description: 'Una descripción',
  platforms: 'PS4',
  released: '2020-01-01',
}
Videogames.create(newGame)
  .then((game) => console.log('Juego creado: ', game))
  .catch((error)=> console.error('Error al crear el juego', error));
 */

// Aca vendrían las relaciones
Videogames.belongsToMany(Genres, {through: 'gamesGenres', timestamps: false});
Genres.belongsToMany(Videogames, {through: 'gamesGenres', timestamps: false});


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importar la conexión { conn } = require('./db.js');
};
