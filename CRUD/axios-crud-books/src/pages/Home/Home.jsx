/* eslint-disable no-unused-vars */
import "./Home.css";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { deleteBook, getBooks } from "../../api/api";
import BookForm from "../../components/BookForm/BookForm";
import BookList from "../../components/BookList/BookList";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [refetchData, setRefetchData] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, [refetchData]);

  const handleSaveBook = (book) => {
    setBooks((prevBooks) => {
      const bookIndex = prevBooks.findIndex((b) => b.id === book.id);
      if (bookIndex > -1) {
        const updatedBooks = [...prevBooks];
        updatedBooks[bookIndex] = book;
        return updatedBooks;
      } else {
        return [...prevBooks, book];
      }
    });
  };

  const handleEditBook = (book) => {
    setCurrentBook(book);
  };

  const handleDeleteBook = async (id) => {
    setIsLoading(true);
    try {
      await deleteBook(id);
      setCurrentBook(null);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
      setRefetchData((prev) => !prev);
    }
  };

  return (
    <div className="home">
      <h1>Library Management</h1>
      <BookForm
        setIsLoading={setIsLoading}
        setRefetchData={setRefetchData}
        book={currentBook}
        onSave={handleSaveBook}
      />
      <BookList
        books={books}
        onDelete={handleDeleteBook}
        onEdit={handleEditBook}
      />
      {isLoading && <Spinner />}
    </div>
  );
};

export default Home;
