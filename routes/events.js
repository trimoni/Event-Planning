import { Router } from "express"
import * as eventsCtrl from '../controllers/events.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', eventsCtrl.index)




export {
  router
}