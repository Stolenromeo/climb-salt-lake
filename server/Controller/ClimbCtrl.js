let climbs = require("../ServerClimbs")

module.exports = {
    create: (req, res)=>{
        let id = climbs[climbs.length-1].id;
        id++
        let {} = req.body;
        let newClimb = {id, ...req.body};
        climbs.push(newClimb)
        res.status(200).send(climbs)
    },
    read: (req, res)=>{
        res.status(200).send(climbs)
    },
    update:(req, res)=>{
        let index= climbs.findIndex(climb =>{
            return climb.id=== +req.params.id
        })
        climbs[index]={...climbs[index],...req.body}
        res.status(200).send(climbs)
    },
    delete: (req, res)=>{
        let index= climbs.findIndex(climb =>{
            return climb.id=== +req.params.id
        })
        climbs.splice(index, 1)
        res.status(200).send(climbs)
    }
}