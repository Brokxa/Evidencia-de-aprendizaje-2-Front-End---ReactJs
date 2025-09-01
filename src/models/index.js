const sequelize = require('../config/database');

const Genero = require('./genero.model');
const Director = require('./director.model');
const Productora = require('./productora.model');
const Tipo = require('./tipo.model');
const Media = require('./media.model');

Genero.initModel(sequelize);
Director.initModel(sequelize);
Productora.initModel(sequelize);
Tipo.initModel(sequelize);
Media.initModel(sequelize);

// Relaciones
Genero.hasMany(Media, { foreignKey: 'generoId' });
Media.belongsTo(Genero, { foreignKey: 'generoId', as: 'genero' });

Director.hasMany(Media, { foreignKey: 'directorId' });
Media.belongsTo(Director, { foreignKey: 'directorId', as: 'director' });

Productora.hasMany(Media, { foreignKey: 'productoraId' });
Media.belongsTo(Productora, { foreignKey: 'productoraId', as: 'productora' });

Tipo.hasMany(Media, { foreignKey: 'tipoId' });
Media.belongsTo(Tipo, { foreignKey: 'tipoId', as: 'tipo' });

module.exports = {
  sequelize,
  Genero,
  Director,
  Productora,
  Tipo,
  Media
};