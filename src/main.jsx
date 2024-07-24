import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Might add a css library later
import './portfolio.css';

import App from './App';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutMe';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/ContactMe';
import ResumePage from './pages/Resume';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <AboutPage />,
            },
            {
                path: 'portfolio',
                element: <PortfolioPage />,
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
            {
                path: 'resume',
                element: <ResumePage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);