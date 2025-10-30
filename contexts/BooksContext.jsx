import { createContext, useEffect, useState } from "react";
import client, { databases } from "../lib/appwrite";
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
    let unsubscribe;
    const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`;
    if (user) {
      fetchBooks();
      // Subscribe to the channel to listen real-time changes
      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response;

        if (events[0].includes("create")) {
          setBooks((prevBooks) => [...prevBooks, payload]); // payload holds new object
        }
      });
    } else {
      setBooks([]); // If we logout, this going to reset the books
    }

    return () => {
      if (unsubscribe) unsubscribe(); // cleanup - stop listening for changes
    };
  }, [user]);

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
