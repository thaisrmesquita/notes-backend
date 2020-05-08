import User from "../models/User";

class SessionController {

    async store(req, res) {
        const { email, password} = req.body;

        const user = await User.findOne({email,password});

        if(!user) {
            return res.json('Por favor, cadastrar usuario');
        }

        return res.json(user);
    }
}

export default new SessionController();