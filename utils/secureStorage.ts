import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "auth_token";
const USER_KEY = "user_data";

// Secure Storage Utility Functions
export async function storeToken(token: string): Promise<void> {
  try {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  } catch (error) {
    console.error("Error storing token:", error);
    throw new Error("Failed to store authentication token");
  }
}

// Retrieve the stored authentication token
export async function getToken(): Promise<string | null> {
  try {
    return await SecureStore.getItemAsync(TOKEN_KEY);
  } catch (error) {
    console.error("Error retrieving token:", error);
    return null;
  }
}

// Delete the stored authentication token
export async function deleteToken(): Promise<void> {
  try {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  } catch (error) {
    console.error("Error deleting token:", error);
    throw new Error("Failed to delete authentication token");
  }
}

// Store user data securely
export async function storeUserData(userData: object): Promise<void> {
  try {
    await SecureStore.setItemAsync(USER_KEY, JSON.stringify(userData));
  } catch (error) {
    console.error("Error storing user data:", error);
    throw new Error("Failed to store user data");
  }
}

// Retrieve stored user data
export async function getUserData(): Promise<object | null> {
  try {
    const data = await SecureStore.getItemAsync(USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error retrieving user data:", error);
    return null;
  }
}

// Delete stored user data
export async function deleteUserData(): Promise<void> {
  try {
    await SecureStore.deleteItemAsync(USER_KEY);
  } catch (error) {
    console.error("Error deleting user data:", error);
    throw new Error("Failed to delete user data");
  }
}

// Clear all authentication data (token and user data)
export async function clearAuthData(): Promise<void> {
  try {
    await Promise.all([deleteToken(), deleteUserData()]);
  } catch (error) {
    console.error("Error clearing auth data:", error);
    throw new Error("Failed to clear authentication data");
  }
}

// Check if user is authenticated by verifying token exists
export async function isAuthenticated(): Promise<boolean> {
  try {
    const token = await getToken();
    return token !== null && token !== "";
  } catch (error) {
    console.error("Error checking authentication:", error);
    return false;
  }
}
