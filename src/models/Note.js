import { Schema, model } from 'mongoose';

const NoteSchema = new Schema({
    title: String,
    description: String,
    date: {
        type: Date,
        default: Date.now
    },
    user:  {
        type:Schema.Types.ObjectId,
        ref:'User'
    }
});

export default model('Note', NoteSchema);