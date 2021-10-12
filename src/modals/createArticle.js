import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../App.css";

const createArticle = ({ modal, toggle }) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader className="form-control" toggle={toggle}>
        Création Mur publicitaire
      </ModalHeader>
      <ModalBody>
        <form>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Titre de l'article"
            />
            <br />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              placeholder="Date debut"
            />
            <br />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              placeholder="Date fin"
            />
            <br />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Montant" />
            <br />
          </div>
          <div className="form-group">
            <input
              type="file"
              name="file"
              id="exampleFile"
              placeholder="Photo"
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button style={{ float: "center" }} color="primary" onClick={toggle}>
          Crée article
        </Button>{" "}
      </ModalFooter>
    </Modal>
  );
};

export default createArticle;
