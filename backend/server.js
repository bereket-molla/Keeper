import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); 

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const noteSchema = new mongoose.Schema({
  title: String,
  body: String,
});
const Note = mongoose.model('Note', noteSchema);
app.get('/api/notes/', async (req, res) => {
    try {
        const notes = await Note.find();  
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/notes', async (req, res) => {
    const newNote = new Note({
        title: req.body.title,
        body: req.body.body
    });
    try {
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete('/api/notes/', async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.query.id);
        if (!note) res.status(404).send("No item found");
        res.status(200).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


