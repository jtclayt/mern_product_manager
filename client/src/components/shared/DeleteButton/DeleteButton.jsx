import React from 'react';
import Axios from 'axios';
import BASE_URL from '../../../constants';
import { navigate } from '@reach/router';
import DeleteButtonView from './DeleteButtonView';

const DeleteButton = ({id}) => {
  const PRODUCT_URL = `${BASE_URL}/products/${id}`;

  const handleDelete = () => {
    Axios.delete(PRODUCT_URL)
      .then(res => navigate('/products'))
      .catch(err => console.error(err));
  }

  return <DeleteButtonView handleDelete={handleDelete} />
}

export default DeleteButton;
