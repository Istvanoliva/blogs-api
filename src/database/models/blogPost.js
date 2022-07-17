const BlogPost = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },    
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.NUMBER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE
    },
    {
      timestamps: false
    });
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, {
        foreignKey: 'id', as: 'user'
      });
    };
  
    return BlogPost;
  };
  
  module.exports = BlogPost;