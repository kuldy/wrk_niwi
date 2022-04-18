import React, { useState, useEffect } from "react";

const ApiCalling = () => {
  const [resource, setResource] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((response) => response.json())
      //   .then((json) => JSON.stringify(json))
      .then((data) => setItems(data));
  }, [resource]);
  return (
    <>
      <p>Calling the api's with useeffect </p>
      <button onClick={() => setResource("posts")}>Posts</button>
      <button onClick={() => setResource("users")}>Users</button>
      <button onClick={() => setResource("comments")}>Comments</button>
      <div>
        {items.map((item) => {
          let property = resource == "posts" ? "title" : "name";
          return <p key={item.id}>{item[property]}</p>;
        })}
      </div>
    </>
  );
};

export default ApiCalling;
