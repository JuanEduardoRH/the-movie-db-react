import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Movie } from "./pages"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter basename="/the-movie-db-react">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path=":movieId" element={<Movie />} />
                </Routes>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
