const { Model, DataTypes } = require('sequelize');

class Media extends Model {
  static initModel(sequelize) {
    Media.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      serial: { type: DataTypes.STRING(100), allowNull: false, unique: true },
      titulo: { type: DataTypes.STRING(250), allowNull: false },
      sinopsis: { type: DataTypes.TEXT },
      url: { type: DataTypes.STRING(500), allowNull: false, unique: true },
      imagen: { type: DataTypes.STRING(500) },
      año_estreno: { type: DataTypes.INTEGER }
    }, {
      sequelize,
      modelName: 'Media',
      tableName: 'medias',
      timestamps: true
    });
  }
}
module.exports = Media;