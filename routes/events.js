import { Router } from "express"
import * as eventsCtrl from '../controllers/events.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', eventsCtrl.index)

router.get('/new', isLoggedIn, eventsCtrl.new)

router.get('/:id', isLoggedIn, eventsCtrl.show)

router.get('/:id/edit', isLoggedIn, eventsCtrl.edit)

router.post('/', isLoggedIn, eventsCtrl.create)

router.post('/:id/comments', isLoggedIn, eventsCtrl.createComment)

router.put('/:id/profiles/:profileId', isLoggedIn, eventsCtrl.addToAttendance)

router.put('/:id', isLoggedIn, eventsCtrl.update)

router.delete('/:id', isLoggedIn, eventsCtrl.delete)

router.delete('/:id/comments/:commentId', isLoggedIn, eventsCtrl.deleteComment)

export {
  router
}