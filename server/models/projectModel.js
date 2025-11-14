import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    startDate: Date,
    endDate: Date,
    team_members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    team_lead: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    status: {
      type: String,
      enum: ['pending', 'active', 'completed'],
      default: 'pending'
    },
    workspace: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Workspace',
      required: true
    },
    progress: {
      type: Number,
      default: 0
    },
    priority:{
      type: String,
      enum: ['low','medium','high'],
      default: 'medium'
    }
  },
  {
    timestamps: true
  }
);



export const projectModel = mongoose.model('Project', projectSchema)
export default projectModel