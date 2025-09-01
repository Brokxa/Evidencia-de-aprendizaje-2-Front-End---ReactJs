const { Model, DataTypes } = require('sequelize');

class Productora extends Model {
  static initModel(sequelize) {
    Productora.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      nombre: { type: DataTypes.STRING(150), allowNull: false, unique: true },
      estado: { type: DataTypes.ENUM('Activo','Inactivo'), defaultValue: 'Activo' },
      eslogan: { type: DataTypes.STRING(250) },
      descripcion: { type: DataTypes.TEXT }
    }, {
      sequelize,
      modelName: 'Productora',
      tableName: 'productoras',
      timestamps: true
    });
  }
}
module.exports = Productora;