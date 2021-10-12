import React from "react";
import { Card, CardImg, CardText, CardDeck, CardBody } from "reactstrap";
import {
  AiOutlineLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const ListeArticle = (props) => {
  return (
    <div>
      <CardDeck>
        <Card>
          <CardImg
            top
            width="50%"
            src="/assets/image02.jpg"
            alt="Card image cap"
          />
          <CardBody>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              <br />
              <AiOutlineLinkedin size="1.9rem" />
              <AiFillFacebook size="1.9rem" />
              <AiFillInstagram size="1.9rem" />
            </CardText>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};

export default ListeArticle;
