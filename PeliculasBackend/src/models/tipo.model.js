const { Model, DataTypes } = require('sequelize');

class Tipo extends Model {
  static initModel(sequelize) {
    Tipo.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      nombre: { type: DataTypes.STRING(50), allowNull: false, unique: true },
      descripcion: { type: DataTypes.TEXT }
    }, {
      sequelize,
      modelName: 'Tipo',
      tableName: 'tipos',
      timestamps: true
    });
  }
}
module.exports = Tipo;