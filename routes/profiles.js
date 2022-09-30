import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/profiles
router.get('/', isLoggedIn, profilesCtrl.index)

// GET localhost:3000/:id
router.get('/:id', isLoggedIn, profilesCtrl.show)

// POST
router.post('/:id/interests', isLoggedIn, profilesCtrl.createInterest)

export {
  router
}