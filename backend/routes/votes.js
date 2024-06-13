//routes 
import { Router } from 'express'
import { getVotes, sendVotes } from '../controllers/voteController.js'

const router = Router();

router.get('/', getVotes)
router.post('/', sendVotes)

export default router