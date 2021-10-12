import React, { useState } from "react";
import CreateArticle from "../modals/createArticle";
import ListerFrame from "./ListerFrame";

const Article = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher un event"
        />
      </div>
      <div className="header text-center">
        <button
          style={{ float: "left" }}
          className="btn btn-primary mt-2 "
          onClick={() => setModal(true)}
        >
          Nouvelle Article
        </button>{" "}
        <button style={{ float: "right" }} className="btn btn-primary mt-2">
          Nouvelle catégorie
        </button>
      </div>
      <div className="task-container"></div>

      <CreateArticle toggle={toggle} modal={modal} />
      <br />
      <ListerFrame />
    </>
  );
};

export default Article;
