import { Client, Account, Databases, Storage, Avatars } from 'appwrite';


export const appwriteConfig = {
    url: import.meta.env.VITE_APP_APPWRITE_URL,
    projectId: import.meta.env.VITE_APP_APPWRITE_PROJECT_ID,
}


export const client = new Client();

client.setEndpoint(appwriteConfig.url)
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);