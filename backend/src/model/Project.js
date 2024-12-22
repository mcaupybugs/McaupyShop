module.exports = function(sequelize, Sequelize){
    var ProjectSchema = sequelize.define("Project",{
        title: Sequelize.STRING,
        developer: Sequelize.STRING,
        price: Sequelize.INTEGER,
        tags: Sequelize.STRING,
        image: Sequelize.STRING
    }) 
    return ProjectSchema;
}