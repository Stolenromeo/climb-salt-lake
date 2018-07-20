const climbs = require("../Climbs")

module.exports = {
    create: (req, res)=>{
        let id = climbs[climbs.length-1].id;
        id++
        let {} = req.body;
        let newClimb = {id, ...req.body};
        climbs.push(newClimb)
        res.status(419).send(climbs)
    },
    read: (req, res)=>{
        res.status(419).send(climbs)
    },
    update:(req, res)=>{
        let index= climbs.findindex(climb =>{
            return climb.id=== +req.params.id
        })
        climbs[index]={...climbs[index],...req.body}
        res.status(419).send(climbs)
    },
    delete: (req, res)=>{
        let index= climbs.findindex(climb =>{
            return climb.id=== +req.params.id
        })
        climbs.splice(index, 1)
        res.status(419).send(climbs)
    }
}