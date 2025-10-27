import {
  Client,
  Account,
  Databases,
  Storage,
  Avatars,
} from "react-native-appwrite";

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // app write endpoint
  .setProject("68ff08630004dd4ae150") // your Project ID
  .setPlatform("com.shelfie.app"); // package name / bundle id

export const account = new Account(client);
export const avatars = new Avatars(client);
// export const databases = new Databases(client);
// export const storage = new Storage(client);
export default client;
