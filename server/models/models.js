const sequelize = require("../db")
const { DataTypes } = require("sequelize")
//ПОЛЬЗОВАТЕЛЬ
const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})
//Фотография
const Photo = sequelize.define("photo", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    postDate: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: true },
})
//Вид
const View = sequelize.define("view", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
})
//Геолокация
const Location = sequelize.define("location", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
})
//Устройство
const Device = sequelize.define("device", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
})

//Цвет
const Color = sequelize.define("color", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
})
// Вид фотографии
const Description = sequelize.define("description", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
})
//Качество фотографии
const Quality = sequelize.define("quality", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
})

//Информация о фото
const PhotoInfo = sequelize.define("photo_info", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, alliwNull: false },
    view: { type: DataTypes.STRING, alliwNull: false },
})

//связи фотографий
View.hasMany(Photo)
Photo.belongsTo(View)

Location.hasMany(Photo)
Photo.belongsTo(Location)

Device.hasMany(Photo)
Photo.belongsTo(Device)

Color.hasMany(Photo)
Photo.belongsTo(Color)

Quality.hasMany(Photo)
Photo.belongsTo(Quality)

Description.hasMany(Photo)
Photo.belongsTo(Description)

Photo.hasMany(PhotoInfo)
PhotoInfo.belongsTo(Photo)

module.exports = {
    User /**/,
    Photo /**/,
    View /**/,
    Location /**/,
    Device /**/,
    Color,
    Quality,
    Description,
}
