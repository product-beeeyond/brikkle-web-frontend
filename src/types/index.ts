// ============================
// Core API Types
// ============================

export interface ApiResponse<T> {
  success: boolean
  message?: string
  data: T
}

export interface PaginatedResponse<T> {
  items: T[]
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
}

// ============================
// Waitlist Types
// ============================

export interface WaitlistData {
  firstName: string
  lastName: string
  email: string
  phone?: string
}

export interface WaitlistResponse {
  id: string
  position?: number
  message: string
}


// ============================
// Auth Types
// ============================

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  firstName: string
  lastName: string
  email: string
  password: string
  phone?: string
}

export interface AuthResponse {
  token: string
  user: User
}

// ============================
// User Types
// ============================

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  avatarUrl?: string
  isVerified: boolean
  createdAt: string
  updatedAt: string
}

// ============================
// Wallet Types
// ============================

export interface WalletBalance {
  bngnBalance: number
  brklBalance: number
  totalAssetsValue: number
  lastUpdated: string
}

// ============================
// Property Types
// ============================

export interface Property {
  id: string
  name: string
  location: string
  imageUrl: string
  description?: string

  totalTokens: number
  availableTokens: number
  tokenPrice: number

  fundedPercentage: number

  expectedReturnRate: number
  investmentTermMonths: number

  status: 'active' | 'funded' | 'closed'

  createdAt: string
  updatedAt: string
}

// ============================
// Transaction Types
// ============================

export type TransactionType =
  | 'deposit'
  | 'withdrawal'
  | 'investment'
  | 'return'
  | 'transfer'

export type TransactionStatus =
  | 'pending'
  | 'completed'
  | 'failed'

export interface Transaction {
  id: string
  type: TransactionType
  status: TransactionStatus

  amount: number
  tokenAmount?: number

  propertyId?: string
  propertyName?: string

  createdAt: string
}

// ============================
// Utility (optional future-proofing)
// ============================

export type Nullable<T> = T | null
export type Optional<T> = T | undefined
