import express from 'express';
import { Book } from '../models/bookModel.js';
import cors from 'cors';

const router = express.Router();
router.use(cors()); // Enable CORS for all routes

// Route for saving a new book
router.post('/', async (request, response) => {
  try {
    const { title, author, publishYear } = request.body;
    if (!title || !author || !publishYear) {
      return response.status(400).json({ message: 'Send all required fields: title, author, publishYear' });
    }

    const book = await Book.create({ title, author, publishYear });
    return response.status(201).json(book);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route for getting all books
router.get('/', async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({ count: books.length, data: books });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route for getting one book by ID
router.get('/:id', async (request, response) => {
  try {
    const book = await Book.findById(request.params.id);
    if (!book) return response.status(404).json({ message: 'Book not found' });
    return response.status(200).json(book);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route for updating a book
router.put('/:id', async (request, response) => {
  try {
    const { title, author, publishYear } = request.body;
    if (!title || !author || !publishYear) {
      return response.status(400).json({ message: 'Send all required fields: title, author, publishYear' });
    }

    const book = await Book.findByIdAndUpdate(
      request.params.id,
      { title, author, publishYear },
      { new: true, runValidators: true }
    );

    if (!book) return response.status(404).json({ message: 'Book not found' });
    return response.status(200).json({ message: 'Book updated successfully', book });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route for deleting a book
router.delete('/:id', async (request, response) => {
  try {
    const book = await Book.findByIdAndDelete(request.params.id);
    if (!book) return response.status(404).json({ message: 'Book not found' });
    return response.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;