//routes 
import { Router } from 'express'
import { getVotes, sendVotes, updatedVote, deleteVote } from '../controllers/voteController.js'

const router = Router();

router.get('/', getVotes)
router.post('/', sendVotes)
router.put('/:id', updatedVote)
router.delete('/:id', deleteVote)

export default router