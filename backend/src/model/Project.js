module.exports = function(sequelize, Sequelize){
    var ProjectSchema = sequelize.define("Project",{
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        developer: {
            type:Sequelize.STRING,
            allowNull: false
        },
        price: {
            type:Sequelize.INTEGER,
            allowNull: false},
        tags: Sequelize.STRING,
        image: {
            type: Sequelize.STRING,
            allowNull: false}
    }) 
    return ProjectSchema;
}