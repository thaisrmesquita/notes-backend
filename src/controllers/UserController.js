import User from '../models/User';

class UserController {

    async index(req, res) {
        let users = await User.find();
        return res.json(users);
    }

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

    async update(req,res) {
        const {user_id} = req.params;
        const { name, email, password } = req.body;
        
       const user = await User.updateOne( {_id:user_id},{
            name,
            email,
            password
        });

        return res.json(`${user_id} - ${name} - ${email} - ${password}`);
    }

    async destroy(req,res) {
        const { user_id } = req.body;

        await User.findByIdAndDelete({_id:user_id});
        return res.json('Usuário excluído.');
    }

}

export default new UserController();