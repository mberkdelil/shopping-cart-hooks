import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from './App';

const Products = props => {

  const books = useContext(BookContext);

  const totalCount = books.state.cart.reduce((total,book) => (total = total + book.count ), 0)


  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim({totalCount})</Link>
      </h2>

      {
        books.state.bookList.map(book => (
          <div key={book.id} className="book">
            <img
              src={book.image}
              alt={book.name}
            />
            <div>
              <h4>{book.name}</h4>
              <p>Yazar: {book.author}</p>
              <p>Fiyat: &#8378; {book.price}</p>
              <button onClick={() => books.addToCart(book)}>Sepete Ekle</button>
            </div>
          </div>
        ))
      }


    </div>
  );
};

export default Products;
