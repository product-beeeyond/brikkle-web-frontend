import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient, endpoints } from '@/lib/api'
import { 
  User, 
  LoginCredentials, 
  RegisterData, 
  AuthResponse,
  Property,
  Transaction,
  WalletBalance,
  ApiResponse,
  PaginatedResponse
} from '@/types'

// Auth hooks
export const useLogin = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (credentials: LoginCredentials) => {
      const response = await apiClient.post<ApiResponse<AuthResponse>>(
        endpoints.auth.login,
        credentials
      )
      return response.data.data
    },
    onSuccess: (data) => {
      localStorage.setItem('authToken', data.token)
      queryClient.setQueryData(['user'], data.user)
    },
  })
}

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: RegisterData) => {
      const response = await apiClient.post<ApiResponse<AuthResponse>>(
        endpoints.auth.register,
        data
      )
      return response.data.data
    },
    onSuccess: (data) => {
      localStorage.setItem('authToken', data.token)
    },
  })
}

export const useLogout = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async () => {
      await apiClient.post(endpoints.auth.logout)
    },
    onSuccess: () => {
      localStorage.removeItem('authToken')
      queryClient.clear()
    },
  })
}

// User hooks
export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const token = localStorage.getItem('authToken')
      if (!token) {
        throw new Error('No authentication token')
      }
      
      const response = await apiClient.get<ApiResponse<User>>(
        endpoints.user.profile
      )
      return response.data.data
    },
    staleTime: 1000 * 60 * 5,
    retry: false,
    enabled: !!localStorage.getItem('authToken'),
  })
}

export const useWalletBalance = () => {
  return useQuery({
    queryKey: ['walletBalance'],
    queryFn: async () => {
      const response = await apiClient.get<ApiResponse<WalletBalance>>(
        endpoints.wallet.balance
      )
      return response.data.data
    },
    refetchInterval: 60000,
  })
}

// Property hooks
export const useProperties = (page = 1, pageSize = 10) => {
  return useQuery({
    queryKey: ['properties', page, pageSize],
    queryFn: async () => {
      const response = await apiClient.get<ApiResponse<PaginatedResponse<Property>>>(
        endpoints.properties.list,
        { params: { page, pageSize } }
      )
      return response.data.data
    },
  })
}

export const useProperty = (id: string) => {
  return useQuery({
    queryKey: ['property', id],
    queryFn: async () => {
      const response = await apiClient.get<ApiResponse<Property>>(
        endpoints.properties.details(id)
      )
      return response.data.data
    },
    enabled: !!id,
  })
}

export const useInvestInProperty = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (data: { propertyId: string; tokenAmount: number }) => {
      const response = await apiClient.post<ApiResponse<Transaction>>(
        endpoints.properties.invest,
        data
      )
      return response.data.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['walletBalance'] })
      queryClient.invalidateQueries({ queryKey: ['properties'] })
      queryClient.invalidateQueries({ queryKey: ['transactions'] })
    },
  })
}

// Transaction hooks
export const useTransactions = (page = 1, pageSize = 20) => {
  return useQuery({
    queryKey: ['transactions', page, pageSize],
    queryFn: async () => {
      const response = await apiClient.get<ApiResponse<PaginatedResponse<Transaction>>>(
        endpoints.transactions.list,
        { params: { page, pageSize } }
      )
      return response.data.data
    },
  })
}

export const useTransaction = (id: string) => {
  return useQuery({
    queryKey: ['transaction', id],
    queryFn: async () => {
      const response = await apiClient.get<ApiResponse<Transaction>>(
        endpoints.transactions.details(id)
      )
      return response.data.data
    },
    enabled: !!id,
  })
}