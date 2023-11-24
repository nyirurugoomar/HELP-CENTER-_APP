const userProfile = require('../model/userProfile')


//Get user profile

const getUserProfile = async (req, res) => {
    try {
      const userId = req.params.userId; 
      const user = await user.findById(userId);
  
      if (!user) {
        // If user is not found, return a 404 response
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json(user);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

//update user profile

const updateUserProfile = async(req,res)=>{
    try {
        const userId = req.params.id;
        const updatedProfile = req.body;
        const user = await User.findByIdAndUpdate(userId, updatedProfile, { new: true });
        res.json(user);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
}


module.exports = {
    getUserProfile,
    updateUserProfile
}