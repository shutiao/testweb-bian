var express = require('express');
var ngR = express.Router();

ngR.route('/api/:res')
    .get(function(req, res){
        var resource = req.params.res;
        switch (resource){
            case "heroes":
                res.json(heroes);
        }
    });

ngR.route('/api/hero/:id')
    .get(function(req, res){
        var heroID = parseInt(req.params.id);
        var fetchedHero = heroes.find(function(hero){
            return hero.id == heroID;
        })
        if (fetchedHero){
            return res.json(fetchedHero);
        }
        else {
            res.sendStatus(404);
        }
    });

ngR.route('/api/hero')
    .put(function(req, res){
        var heroID = parseInt(req.body.id);
        var heroIndex = heroes.findIndex(function(hero){
            return hero.id == heroID;
        });
        if (heroIndex !== "undefined"){
            heroes[heroIndex]['name'] = req.body.name;
            res.sendStatus(204);
        }
        else {
            res.sendStatus(404);
        }
    })
    
    // Add a hero, generate an id for the new hero and returns the hero object
    .post(function(req, res) {
        var maxHeroID = heroes[heroes.length - 1].id;
        req.body.id = maxHeroID + 1;
        heroes.push(req.body);
        res.status(201).json(req.body);
    });

ngR.route('/api/hero/:id')
    .delete(function(req, res){
        var heroID = parseInt(req.params.id);
        var heroIndex = heroes.findIndex(function(hero){
            return hero.id == heroID;
        });
        var hero2Delete = heroes[heroIndex];
        heroes.splice(heroIndex, 1);
        res.json(hero2Delete);
    })

var heroes = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
    ];

ngR.route('/dashboard|heroes|detail/*')
    .get(function(req, res){
        res.render(__dirname + '/../angular-app/dist/toh-index.html');
    });
module.exports = ngR;