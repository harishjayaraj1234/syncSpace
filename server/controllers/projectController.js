import projectModel from "../models/projectModel"
import workspaceModel from "../models/workspaceModel"




// create project

export const createProject = async (req,res)=>{
    try{
        const {
            workspaceId, 
            description,
             name, 
             status, 
             start_date, 
             end_date, 
             team_members, 
             team_lead, 
             progress, 
             priority} = req.body

        // check if workspace exists and user has admin role
        const workspace = await workspaceModel.findById(workspaceId).populate('users')
        if(!workspace){
            return res.status(404).json({success:false,message:"Workspace not found..."})
        }
        const requestingUserId = req.user.id
        const isAdmin = workspace.users.some(user => user._id === requestingUserId && user.role === 'admin')
        if(!isAdmin){
            return res.status(403).json({success:false, message:"Admin access required..."})
        }
        

        // create the project
        const project = new projectModel({
            workspace:workspaceId, 
            description,
             name, 
             status, 
             start_date, 
             end_date, 
             team_members, 
             team_lead, 
             progress, 
             priority

        })
        await project.save()
        res.status(201).json({success:true, project, message:"Project created successfully..."})
    
    }catch(error){
        console.log(error);
        res.status(500).json({success:false,message:error.message})
        
    }

}



// update project in the workspace

export const updateProject = async (req, res)=>{
   try{
    const {
      id,
      workspaceId, 
      description,
      name, 
      status, 
      start_date, 
      end_date, 
      team_members, 
      team_lead, 
      progress, 
      priority
    } = req.body

    // check if workspace exists and user is admin
    const workspace = await workspaceModel.findById(workspaceId).populate('Users')

    if(!workspace){
      return res.status(404).json({succes:false, message:"Workspace not found..."})
    }

    const requestingUserId = req.user.id
    const isAdmin = workspace.users.some(user => user._id === requestingUserId && user.role === 'admin')
    if(!isAdmin){
      return res.status(403).json({success:false, message:"You do not have the permission to update the project..."})
    }

    // update the project
    const updateProject = await projectModel.findByIdAndUpdate(
      id,
      {
        workspace: workspaceId,
        name,
        description,
        status,
        start_date,
        end_date,
        team_members,
        team_lead,
        progress,
        priority
      },
      {new: true}
    )
    if(!updateProject){
      return res.status(404).json({success:false, message:"Project not found..."})
    }
    res.status(200).json({success:true, updateProject, message:"Project updated successfully..."})
   }catch(error){
    console.log(error)
    res.status(500).json({success:false, message:error.message})
   }
}




// delete project in the workspace

export const deleteProject = async (req,res)=>{
  try{
    const {projectId, workspaceId} = req.body

    // check if workspace exists and user is admin
    const workspace = await workspaceModel.findById(workspaceId).populate('Users')

    if(!workspace){
      return res.status(404).json({success:false, message:"Workspace not found..."})
    }

    const requestingUserId = req.user.id
    const isAdmin = workspace.users.some(user =>user._id === requestingUserId && user.role === 'admin')

    if(!isAdmin){
      return res.status(403).json({success:false, message:"You don't have the permission to delete the project..."})
    }

    // delete the project
    const deletedProject = await projectModel.findByIdAndDelete(projectId)

    if(!deletedProject){
      return res.status(404).json({success:false, message:"Project not found..."})
    }
    res.status(200).json({sucess:true, message:"Project deleted successfully...", project: deletedProject})

  }catch(error){
    console.log(error)
    res.status(500).json({success: false, message:error.message})
  }


}