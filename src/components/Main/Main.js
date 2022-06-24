import React, { useRef, useState } from "react";
import "./Main.scss";
import imgSearch from "./img/search.png";

import BookItem from "../BookItem/BookItem";

export default function Main() {
  // hooks
  const [books, setBooks] = useState([]);
  const [name, setName] = useState("");
  const [categories, setCategories] = useState("");
  const [order, setOrder] = useState("relevance");

  const [totalBooks, setTotalBooks] = useState(0);

  let url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${name}+subject:${categories}&orderBy=${order}&startIndex=${books.length}&maxResults=10&key=AIzaSyDAh5jZyy26pPtm3XaVd3wbSsY9gkkne1M`;

  // формируем запрос
  // название
  function titleWord(e) {
    setName(e.target.value);
  }
  // категория
  function changeCategories(e) {
    setCategories(e.target.value);
  }

  function changeOrder(e) {
    setOrder(e.target.value);
  }

  // отправка запроса
  function search(e) {
    if (e.charCode === 13) {
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          setTotalBooks(data.totalItems);
          setBooks(data.items);
        });
    }
  }

  // подгрузить ещё книги
  function showMore() {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setTotalBooks(data.totalItems);
        setBooks([...books, ...data.items]);
      });
  }

  return (
    <div className="Main">
      <header className="header">
        <h1>Книжный поисковик</h1>
        <div
          className="header__name-search"
          onKeyPress={search}
          onChange={titleWord}
        >
          <input type="text" />
          <img src={imgSearch} />
        </div>
        <div className="header__categories">
          <div>
            <span>Categories:</span>
            <select onChange={changeCategories}>
              <option value="">all</option>
              <option value="art">art</option>
              <option value="biography">biography</option>
              <option value="computers">computers</option>
              <option value="history">history</option>
              <option value="medical">medical</option>
              <option value="poetry">poetry</option>
            </select>
          </div>
          <div>
            <span>Sorting by:</span>
            <select onChange={changeOrder}>
              <option value="relevance">relevance</option>
              <option value="newest">newest</option>
            </select>
          </div>
        </div>
      </header>
      <main>
        <h4>
          <span>найдено: </span>
          {totalBooks}
        </h4>
        <div>
          {books === undefined
            ? "Введите названия книги"
            : books.map((e) => {
                if (e.volumeInfo.imageLinks != undefined) {
                  return (
                    <BookItem
                      key={e.id}
                      date={{
                        img: e.volumeInfo.imageLinks.thumbnail,
                        title: e.volumeInfo.title,
                        authors: e.volumeInfo.authors,
                        description: e.volumeInfo.description,
                      }}
                    />
                  );
                }
              })}
        </div>
      </main>
      <div className="more-btn" onClick={showMore}>
        ещё...
      </div>
    </div>
  );
}
