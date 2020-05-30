import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const PokeCard = ({ data }) => {
  console.log(data);

  return (
    <Card>
      <Card.Img variant="top" src={data.sprites.front_default} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

PokeCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      sprites: PropTypes.shape({
        front_default: PropTypes.string,
      }),
      name: PropTypes.string,
    })
  ).isRequired,
};

export default PokeCard;
