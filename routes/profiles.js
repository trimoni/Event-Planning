import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)

router.get('/:id', isLoggedIn, profilesCtrl.show)

router.post('/:id/interests', isLoggedIn, profilesCtrl.createInterest)

router.delete('/interests/:id', isLoggedIn, profilesCtrl.deleteInterest)

export {
  router
}