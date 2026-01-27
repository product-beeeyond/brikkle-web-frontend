import axios from 'axios'

// Create axios instance with default config
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor for adding auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for handling errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// API endpoints
export const endpoints = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    verifyEmail: '/auth/verify-email',
  },
  user: {
    profile: '/user/profile',
    updateProfile: '/user/profile',
    balance: '/user/balance',
  },
  properties: {
    list: '/properties',
    details: (id: string) => `/properties/${id}`,
    invest: '/properties/invest',
  },
  transactions: {
    list: '/transactions',
    details: (id: string) => `/transactions/${id}`,
  },
  wallet: {
    balance: '/wallet/balance',
    transactions: '/wallet/transactions',
  },
}