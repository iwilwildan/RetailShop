// ProductListStyles.js

import styled from 'styled-components';

export const ProductListContainer = styled.div`
  /* Add any additional styles for the container if needed */
`;

export const ProductTable = styled.table`
  width: 100%;
  max-width: 800px; /* Adjust the max-width as needed */

  border-collapse: collapse;

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd; /* Adjust the border color as needed */
  }

  th {
    background-color: #343a40; /* Header background color */
    color: #fff; /* Header text color */
  }

  tbody tr:nth-child(even) {
    background-color: #f8f9fa; /* Even row background color */
  }

  tbody tr:hover {
    background-color: #e2e6ea; /* Hover row background color */
  }
`;

export const ProductForm = styled.form`
  width: 100%;
  max-width: 600px; /* Adjust the max-width as needed */

  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input,
  select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }

  div {
    display: flex;
    gap: 10px;
  }

  button {
    padding: 8px;
    cursor: pointer;
    background-color: #007bff; /* Button background color */
    color: #fff; /* Button text color */
    border: none;
    border-radius: 4px;
  }

  button:hover {
    background-color: #0056b3; /* Button background color on hover */
  }
`;

export const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;

  button {
    padding: 8px 16px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
  }

  button:hover {
    background-color: #0056b3;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
