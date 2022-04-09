import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "./App";

const Cart = () => {

  const context = useContext(BookContext);

  const totalPrice = context.state.cart.reduce((total, book) => (total = total + book.count * book.price), 0).toFixed(2);

  const totalCount = context.state.cart.reduce((total, book) => (total = total + book.count), 0)



  return (


    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim({totalCount})</span>
      </h2>

      <h3>Toplam Sepet Tutarı: &#8378;{totalPrice}</h3>
      {
        context.state.cart.map(book => (

          <div key={book.id} className="book">
            <img
              src={book.image}
              alt={book.name}
            />
            <div>
              <h4>{book.name}</h4>
              <p>Yazar: {book.author}</p>
              <p>Fiyat: &#8378;{book.price}</p>
              <p>Toplam: &#8378;{book.price * book.count}</p>
              <p>Sepetinizde bu kitaptan toplam {book.count} adet var.</p>
              <button onClick={() => context.decrease(book.id)} type="submit">-</button>
              <button onClick={() => context.removeCart(book.id)}>Sepetten Çıkar</button>
              <button onClick={() => context.increase(book.id)}>+</button>
            </div>
          </div>


        ))
      }
    </div>
  );
};

export default Cart;
