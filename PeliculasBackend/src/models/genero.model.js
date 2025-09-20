const { Model, DataTypes } = require('sequelize');

class Genero extends Model {
  static initModel(sequelize) {
    Genero.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      nombre: { type: DataTypes.STRING(100), allowNull: false, unique: true },
      estado: { type: DataTypes.ENUM('Activo','Inactivo'), defaultValue: 'Activo' },
      descripcion: { type: DataTypes.TEXT }
    }, {
      sequelize,
      modelName: 'Genero',
      tableName: 'generos',
      timestamps: true
    });
  }
}
module.exports = Genero;