'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    img: DataTypes.STRING,
  }, {});
  users.associate = function(models) {
    // associations can be defined here
    users.hasMany(models.comments, {
      as: 'usersComments',
      foreignKey: 'idUser'
    })
    users.hasMany(models.articles, {
      as:'writtenArticle',
      foreignKey: 'idUser'
    })
  };
  return users;
};