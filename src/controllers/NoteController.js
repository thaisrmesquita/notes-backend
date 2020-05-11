import Note from "../models/Note";

class NoteController {

    async store(req,res) {
        const { title, description } = req.body;
        const { user_id } = req.headers;
        const date = new Date(Date.now());

        const note = await Note.create({
            user:user_id,
            title,
            description,
            date
        });

        return res.json(note);
    }

    async update(req,res) {
        const { user_id } = req.headers;
        const { note_id } = req.params;
        const { title, description } = req.body;
        const date = new Date(Date.now());

        const notes = await Note.updateOne({_id: note_id}, {
            user:user_id,
            title,
            description,
            date
        });

        return res.json(notes);
    }
}

export default new NoteController();