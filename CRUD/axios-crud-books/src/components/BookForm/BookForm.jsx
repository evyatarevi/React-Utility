/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import "./BookForm.css";
import Spinner from "../Spinner/Spinner";
import { createBook, updateBook } from "../../api/api";

const BookForm = ({onSave,book, setIsLoading, setRefetchData}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if(book){
      setTitle(book.title)
      setAuthor(book.author)
    }
  }, [book])
  


  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      if(book) {
        const updatedBook = await updateBook(book.id, {author, title})
        onSave(updatedBook)
      }else {
        const newBook = await createBook({title,author});
      }
      setAuthor('');
      setTitle('')
    } catch (error) {
      setError(error.message)
    }finally {
      setIsLoading(false)
      setRefetchData(prev=>!prev)
    }
  };


  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input
        required
        type="text"
        value={title}
        placeholder="Book Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        required
        type="text"
        value={author}
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">{book ? 'Update' : 'Add'} Book</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default BookForm;
