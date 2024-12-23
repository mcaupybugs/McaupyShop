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
        Project.create({
            title: req.body.title,
            developer: req.body.developer,
            price: req.body.price,
            tags: req.body.price,
            image: req.body.image
        }).then(project => {
            res.status(200).json(project)
        }).catch(error=>{
            res.status(400).json(error.message)
        })
})

router.get("/:id", [isIdValid, doesIdExist], (req,res)=>{
    Project.findOne({ where: { id: req.params.id}}).then(project =>{
        res.status(200).json(project);
    }).catch(error => {
        res.status(400).json(error.message)
    })
})

router.put("/:id", [isIdValid, doesIdExist], (req,res)=>{
    Project.update(req.body,{where: {id: req.params.id}}).then(project => {
        res.sendStatus(204)
    })
})

router.delete("/:id", [isIdValid, doesIdExist], (req,res)=>{
    Project.destroy({
        where:{
            id: req.params.id
        }
    }).then(project => {
        res.sendStatus(204)
    }).catch(error => {
        res.status(400).json(error.message)
    })
})

module.exports = router