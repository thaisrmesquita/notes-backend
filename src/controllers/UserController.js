import User from '../models/User';

class UserController {
    async store(req, res) {
        const { name, email, password } = req.body;
        let user = await User.findOne({email}); 

        if(!user) {
           let newUser = await User.create({
                name,
                email,
                password
            });
            return res.json(`Cadastro realizado com sucesso: ${newUser}`);
        } else {
            return res.json(`E-mail já cadastrado.: ${user}`);
        }
    }
}

export default new UserController();