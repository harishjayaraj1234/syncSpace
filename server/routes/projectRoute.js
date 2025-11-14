import express from 'express'
import {
  createProject,
  updateProject,
  deleteProject
} from '../controllers/projectController.js';

const projectRouter = express.Router();


projectRouter.post('/', createProject)
projectRouter.put('/:id', updateProject)
projectRouter.delete('/:id', requireRole('admin'), deleteProject)

export default projectRouter;