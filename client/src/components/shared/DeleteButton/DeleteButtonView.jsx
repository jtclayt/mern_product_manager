import React from 'react';
import Button from 'react-bootstrap/Button';

const DeleteButtonView = ({handleDelete}) => {
  return (
    <Button className="DeleteButton" onClick={handleDelete} variant="danger">
      Delete
    </Button>
  );
}

export default DeleteButtonView;
