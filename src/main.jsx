import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage'
import PokemonPage from './components/PokemonPage'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/pokemon/:name',
        element: <PokemonPage />,
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
