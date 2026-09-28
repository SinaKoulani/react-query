import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a QueryClient to manage server state
// server state means the data comes from backend

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  
{/* Make the QueryClient available to the entire app */}

    <QueryClientProvider client={queryClient}>

    <App />
    </QueryClientProvider>
  </StrictMode>,
)
