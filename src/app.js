import express from "express";

const app = express();

const books = [
  {id: 1, "title": "Lord of the Rings"},
  {id: 2, "title": "The Hobbit"}
]
//retrieve an info
app.get('/', (req, res) => {
  res.status(200).send('Node Course');
})
//get an info
app.get('/books', (req, res) => {
  res.status(200).json(books)
})
//create a new entry
app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).send('Books registered sucessfully')
})
//update an info
app.put('/books/:id', (req, res) => {
  let index =  fetchBook(req.params.id);
  books[index].title = req.body.title;
  res.json(books);
  //res.json(books.[title]);
})
//delete an info
app.delete('/books/:id', (req, res) => {
  let {id} = req.params;
  let index = fetchBook(id);
  books.splice(index, 1);
  res.send(`Book ${id} removed successfully`);
})

export default app
