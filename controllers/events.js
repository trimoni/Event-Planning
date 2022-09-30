import { Event } from "../models/event.js"

function index(req, res){
  Event.find({})
  .then(events => {
    res.render('events/index', {
      events,
      title: 'event-planner'
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}



export {
  index,
}