import { Profile } from "../models/profile.js";

function index(req, res){
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: 'Interests'
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
    res.render('profiles/show', {
      title: `Interests${profile.name}'s profile`,
      isSelf,
      profile,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/profiles')
  })
}

function createInterest(req, res){
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.interests.push(req.body)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

export {
  index,
  show,
  createInterest
}