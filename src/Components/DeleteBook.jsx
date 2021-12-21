import { useState } from "react";
import axios from "axios";
import { baseURL } from "../constants";

export default function DeleteBook() {
  const [name, setName] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log({
      name: name,
    });
    axios
      .post(baseURL + "/api/books/deletebook", {
        name: name,
      })
      .then((res) => {
        console.log(res.data);
        alert("book deleted successfully");
      })
      .catch((res) => {
        console.log(JSON.stringify(res.response.data.msg, null, 4));
        alert(res.response.data.msg);
      });
  }

  return (
    <div>
      <br/>
      <h1>&nbsp; &nbsp; Delete Book</h1>
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

        <input type="submit" />
      </form>
    </div>
  );
}
