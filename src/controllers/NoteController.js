import Note from "../models/Note";

class NoteController {

    async store(req,res) {
        const { title, description } = req.body;
        const { user_id } = req.headers;
        const date  = new Date(Date.now());

        const note = await Note.create({
            user:user_id,
            title,
            description,
            date
        });

        return res.json(note);
    }
}

export default new NoteController();