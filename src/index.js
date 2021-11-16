//import React from "react"
import React from "react";
import ReactDOM from "react-dom";

//css
import "./index.css";

//setup vers
const books = [
  {
    id: 1,
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 2,
    title: "How to Catch a Mermaid",
    author: "Adam Wallace",
    img: "https://images-na.ssl-images-amazon.com/images/I/61ZUGka8uNL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 3,
    title: "How to Catch a Dinosaur",
    author: "Adam Wallace ",
    img: "https://images-na.ssl-images-amazon.com/images/I/51szd1izDeL._SX258_BO1,204,203,200_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  //const { title, author, img } = props.book; //destructuring
  const clickHandler = () => {
    alert("Hi......clicked");
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button onClick={clickHandler}>reference example</button>
    </article>
  );
};

ReactDOM.render(
  <BookList />,

  document.getElementById("root")
);
