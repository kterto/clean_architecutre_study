import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PromptPage from "./presentation/pages/Prompt/PromptPage";
import Layout from "./presentation/core/Components/Layout";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <PromptPage />
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}
