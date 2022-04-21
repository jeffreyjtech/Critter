'use strict';

const messageModel = (sequelize, DataTypes) => {
  const model = sequelize.define('messages', {
    author: { type: DataTypes.STRING, allowNull: false },
    timestamp: { type: DataTypes.BIGINT, allowNull: false },
    body: { type: DataTypes.STRING, allowNull: false },
    length: { type: DataTypes.INTEGER, allowNull: false },
  });

  return model;
};

module.exports = messageModel;
