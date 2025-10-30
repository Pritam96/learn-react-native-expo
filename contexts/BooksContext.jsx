import { createContext, useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

export const BooksContext = createContext();

const DATABASE_ID = "6901fdd40014bda80b46";
const COLLECTION_ID = "books";

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("userId", user.$id)] // filtering by userId
      );

      setBooks(response.documents);
      console.log(response.documents);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function fetchBookById() {
    try {
    } catch (error) {
      console.log(error.message);
    }
  }

  async function createBook(data) {
    try {
      const newBook = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );
      fetchBooks();
    } catch (error) {
      console.log(error.message);
    }
  }

  async function deleteBook() {
    try {
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    if (user) fetchBooks();
    else setBooks([]); // If we logout, this going to reset the books
  }, [user]);

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
