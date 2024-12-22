var express = require('express')
var Project = require('../model').Project;
var router = express.Router()

// middleware

var isIdValid = function(req,res,next) {
    if(isNaN(req.params.id)){
        res.status(400).json("Invalid ID supplied");
    }else{
        next();
    }
}

var doesIdExist = function(req,res,next){
    Project.count({where: {id: req.params.id}}).then(count=>{
        if (count!= 0){
            next();
        }else{
            res.status(400).json("Project not found");
        }
    })
}
router.get("/", (req,res)=>{
    Project.findAll().then(project => {
        res.status(200).json(project)
    })
})

router.post("/", (req,res)=>{
    try{
        Project.create({
            title: req.body.title,
            developer: req.body.developer,
            price: req.body.price,
            tags: req.body.price,
            image: req.body.image
        }).then(project => {
            res.status(200).json(project)
        });
    }
    catch(ex){
        console.log(ex)
    }
})

router.get("/:id", [isIdValid, doesIdExist], (req,res)=>{
    Project.findOne({ where: { id: req.params.id}}).then(project =>{
        res.status(200).json(project);
    })
})

module.exports = router