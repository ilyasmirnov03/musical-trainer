import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/main/main.tsx';
import Trainer from './components/trainer/trainer.tsx';
import App from './components/app.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/trainer',
        element: <Trainer />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>    
  </React.StrictMode>,
)
