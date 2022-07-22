const BlogPost = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },    
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.NUMBER,
      published: { type: DataTypes.DATE, defaultValue: new Date(), },
      updated: { type: DataTypes.DATE, defaultValue: new Date(), },
    },
    {
      timestamps: false
    });
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, {
        foreignKey: 'userId', as: 'user'
      });
    };
  
    return BlogPost;
  };
  
  module.exports = BlogPost;