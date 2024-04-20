import User from '../models/User.js';
export default userControllers = {
    create: async (req, res) => {
        try{
            const params = req.body;
            if(!params.username || !params.email || !params.password){
                res.status(400).json(
                    {
                        message: "Missing parameters",
                        ok:false,
                    }
                )
            }
            const findedUser = await User.findOne({email: params.email, username: params.username})
            if(findedUser){
                const user = new User({
                    username: params.username,
                    email: params.email,
                    password: params.password,
                })
                const userSaved = await User.save(user)
                if(!userSaved){
                    res.status(400).json(
                        {
                            message: "Error creating user",
                            ok:false,
                        }
                    )
                }
                else{
                    res.status(200).json(
                        {
                            message: "User created",
                            ok:true,
                        }
                    )
                }
            }
            else{
                res.status(400).json(
                    {
                        message: "Email or username already in use",
                        ok:false,
                    }
                )
            }
        }
        catch(error){
            res.status(500).json(
                {
                    message: "Error creating user",
                    ok:false,
                }
            )
        }
    },
    login: async (req, res) => {
        res.status(200).json(
            {
                message: "User logged in",
                ok:true,
            }
        )
    },
}
