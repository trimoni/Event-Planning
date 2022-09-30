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

function newEvents(req, res){
  res.render('events/new', {
    title: 'Add Event',
  })
}

function create(req, res){
  console.log('ADD EVENT', req.body)
  req.body.owner = req.user.profile._id
  Event.create(req.body)
  .then(event => {
    res.redirect('/events')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/events')
  })
}

function show(req, res){
  Event.findById(req.params.id)
  .populate('owner')
  .then(event => {
    res.render('events/show', {
      event,
      title: 'Event Details'
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/events')
  })
}

function edit(req, res){
  Event.findById(req.params.id)
  .then(event => {
    res.render('events/edit', {
      event,
      title: 'Edit Event'
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/events')
  })
}

function update(req, res){
  Event.findById(req.params.id)
  .then(event => {
    if (event.owner.equals(req.user.profile._id)) {
      event.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/events/${event._id}`)
      })
    }
  })
  .catch(error => {
    console.log(error)
    res.redirect('/events')
  })
}

function deleteEvent(req, res){
  Event.findByIdAndDelete(req.params.id)
  .then(event => {
    res.redirect('/events')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/events/show')
  })
}

// function addToAttendance(req, res){
//   Event.findById(req.params.id)
//   .then(event => {
//     event.profiles.push(req.body.profile._id)
//     event.save()
//     .then(() => {
//       res.redirect(`/events/${event._id}`)
//     })
//   })
// }

export {
  index,
  newEvents as new,
  create,
  show,
  edit,
  update,
  deleteEvent as delete,
  // addToAttendance
}