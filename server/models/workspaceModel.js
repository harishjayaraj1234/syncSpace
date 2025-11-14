import mongoose from 'mongoose'

const workspaceSchema = new mongoose.Schema({
    name:{type: String, required: true},
    users :[{
        _id:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
        role: {type: String, enum:['admin','member'], required: true}
    }]
},
{
    timestamps: true
})

export const workspaceModel = mongoose.model('Workspace', workspaceSchema)
export default workspaceModel