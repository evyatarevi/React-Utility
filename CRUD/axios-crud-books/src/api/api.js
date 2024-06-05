/* eslint-disable no-unused-vars */
import axios from "axios";

const API_URL = "https://65676a1d64fcff8d73105558.mockapi.io/api/v1/books";

export const getBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching books");
  }
};

export const createBook = async (book) => {
  try {
    const response = await axios.post(API_URL, book);
    return response.data;
  } catch (error) {
    throw new Error("Error creating book");
  }
};

export const updateBook = async (id, book) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, book);
    return response.data;
  } catch (error) {
    throw new Error("Error creating book");
  }
};

export const deleteBook = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error("Error deleting book");
  }
};
