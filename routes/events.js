import { Router } from "express"
import * as eventsCtrl from '../controllers/events.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// localhost/events
router.get('/', eventsCtrl.index)

// localhost/events/new
router.get('/new', eventsCtrl.new)

// localhost/events/show
router.get('/:id', isLoggedIn, eventsCtrl.show)

// localhost/:id/edit
router.get('/:id/edit', isLoggedIn, eventsCtrl.edit)

// POST localhost/events
router.post('/', isLoggedIn, eventsCtrl.create)

router.post('/:id/comments', isLoggedIn, eventsCtrl.createComment)

router.put('/:id/profiles/:profileId', isLoggedIn, eventsCtrl.addToAttendance)

// PUT update edit
router.put('/:id', isLoggedIn, eventsCtrl.update)

// DELETE
router.delete('/:id', isLoggedIn, eventsCtrl.delete)

router.delete('/:id/comments/:commentId', isLoggedIn, eventsCtrl.deleteComment)


export {
  router
}