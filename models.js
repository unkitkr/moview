const { Sequelize, DataTypes  } = require('sequelize');

const sequelize = new Sequelize('postgres://imtdvxjggtuylc:d6cfd98043eb5e61fcd3dfb6310a16afdbb871fb9b0c74f3104457503dcc0f56@ec2-34-200-106-49.compute-1.amazonaws.com:5432/dbqspn2l5crosf')


const Movies = sequelize.define('Movies', {
    // Model attributes are defined here
    id:{
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
    }, 
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
    },
    ratedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    dateReleased: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    }
      

  }, {
    freezeTableName: true,
  });

Movies.sync()

module.exports = {
    Movies
}