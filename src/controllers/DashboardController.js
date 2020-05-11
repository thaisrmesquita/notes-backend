import Note from '../models/Note';

class Dashboard {
    async show(req, res) {
        const { user_id } = req.headers;

        const notes = await Note.find({user:user_id});

        return res.json(notes);
    }
}
export default new Dashboard();