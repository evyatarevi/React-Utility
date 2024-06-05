/* eslint-disable react/prop-types */
import "./BookList.css";

const BookList = ({books, onEdit, onDelete}) => {
  return (
    <div className="book-list">
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} <span>by</span> {book.author}
            <div>
              <button onClick={() => onEdit(book)}>Edit</button>
              <button onClick={() => onDelete(book.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
