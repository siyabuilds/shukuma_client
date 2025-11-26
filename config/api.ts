/**
 * API Configuration
 * Centralized configuration for backend API endpoints
 */

// Base URL for the API
export const API_BASE_URL = "https://shukuma-backend.onrender.com";

export const API_ENDPOINTS = {
  // Authentication
  LOGIN: `${API_BASE_URL}/api/login`,
  REGISTER: `${API_BASE_URL}/api/register`,

  // Daily exercises
  DAILY: `${API_BASE_URL}/api/daily`,

  // Exercises
  EXERCISES: `${API_BASE_URL}/api/exercises`,
  EXERCISES_BY_DIFFICULTY: (level: string) =>
    `${API_BASE_URL}/api/exercises/difficulty/${level}`,
  EXERCISES_BY_TYPE: (type: string) =>
    `${API_BASE_URL}/api/exercises/type/${type}`,
  EXERCISE_BY_ID: (id: string) => `${API_BASE_URL}/api/exercises/${id}`,
  RANDOM_EXERCISE: `${API_BASE_URL}/api/exercises/random`,

  // Progress
  PROGRESS: `${API_BASE_URL}/api/progress`,
};

// Default headers for API requests
export const getHeaders = (token?: string) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};
