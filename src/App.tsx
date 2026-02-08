import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { queryClient } from "@/lib/queryClient";
import { store } from "@/store";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingFallback from "@/components/LoadingFallback";
// import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { ThemeProvider } from "@/hooks/Theme/themeProvider";

import "@/styles/globals.css";

// Lazy load pages for code splitting
const LandingPage = lazy(() => import("@/pages/landingPage/LandingPage"));
const LoginPage = lazy(() => import("@/pages/auth/LoginPage"));
const DashboardPage = lazy(() => import("@/pages/DashboardPage"));
const ResetPassword = lazy(() => import("@/pages/auth/ResetPassword"));

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* Public routes */}
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
                  {/* Protected routes */}
                  <Route
                    path="/dashboard"
                    element={
                      // <ProtectedRoute>
                      <DashboardPage />
                      // </ProtectedRoute>
                    }
                  />

                  {/* Future protected routes */}
                  {/* 
                <Route
                  path="/marketplace"
                  element={
                    <ProtectedRoute>
                      <MarketplacePage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/wallet"
                  element={
                    <ProtectedRoute>
                      <WalletPage />
                    </ProtectedRoute>
                  }
                />
                */}
                </Routes>
              </Suspense>
            </BrowserRouter>
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
