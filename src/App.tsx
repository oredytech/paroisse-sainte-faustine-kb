
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import ArticlesPage from "./pages/ArticlesPage";
import ArticlePage from "./pages/ArticlePage";
import HistoriquePage from "./pages/HistoriquePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/actualites" element={<ArticlesPage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
          <Route path="/historique" element={<HistoriquePage />} />
          
          {/* Redirections pour les anciennes URLs */}
          <Route path="/accueil" element={<Navigate to="/" replace />} />
          <Route path="/vatican-news" element={<Navigate to="/#vatican-news" replace />} />
          
          {/* Route 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
