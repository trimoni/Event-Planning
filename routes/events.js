import { Router } from "express"
import * as eventsCtrl from '../controllers/events.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// localhost/events
router.get('/', eventsCtrl.index)

// localhost/events/new
router.get('/new', eventsCtrl.new)

// POST localhost/events
router.post('/', isLoggedIn, eventsCtrl.create)


export {
  router
}