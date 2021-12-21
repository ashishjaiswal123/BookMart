import { useState } from "react";
import axios from "axios";
import { baseURL } from "../constants";

export default function AddBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [isFiction, setIsFiction] = useState("");
  const [image, setImage] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log({
      name: name,
      author: author,
      price: price,
      isFiction: isFiction,
      image: image,
    });
    axios
      .post(baseURL + "/api/books/addbook", {
        name: name,
        author: author,
        price: price,
        isFiction: isFiction,
        image: image,
      })
      .then((res) => {
        console.log(res.data);
        alert("book added successfully");
      })
      .catch((res) => {
        console.log(JSON.stringify(res.response.data.msg, null, 4));
        alert(res.response.data.msg);
      });
  }

  return (
    <div>
      <br/>
      <h1>&nbsp; &nbsp; Add Book</h1>
      <br/>
      <form
        onSubmit={(event) => {
          handleFormSubmit(event);
        }}
      >
        <br/>
        <label htmlFor="name">Book Name :</label>
        <br />
        <input
         placeholder="Book name"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <label htmlFor="author">Author Name :</label>
        <br />
        <input
          placeholder="Name"
          type="text"
          id="author"
          name="author"
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
        <br />
        <label htmlFor="price">Price :</label>
        <br />
        <input
         placeholder="999"
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <br />
        <label htmlFor="isFiction" >Fiction :</label>
        <br />
        <input
        placeholder="true/false"
          type="boolean"
          id="isFiction"
          name="isFiction"
          value={isFiction}
          onChange={(event) => {
            setIsFiction(event.target.value);
          }}
        />
        <br />
        <label htmlFor="image">Image_link :</label>
        <br />
        <input
          placeholder="https://"
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
