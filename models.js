const { Sequelize, DataTypes  } = require('sequelize');

const sequelize = new Sequelize('postgresql://postgres:SudoAdmin123@localhost/moview')


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

// Movies.sync()

module.exports = {
    Movies
}