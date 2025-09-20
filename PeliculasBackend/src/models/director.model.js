const { Model, DataTypes } = require('sequelize');

class Director extends Model {
  static initModel(sequelize) {
    Director.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      nombre: { type: DataTypes.STRING(200), allowNull: false },
      estado: { type: DataTypes.ENUM('Activo','Inactivo'), defaultValue: 'Activo' }
    }, {
      sequelize,
      modelName: 'Director',
      tableName: 'directores',
      timestamps: true
    });
  }
}
module.exports = Director;