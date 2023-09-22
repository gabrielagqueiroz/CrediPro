import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Cadastro from './pages/Cadastro/index';
import Vendas from './pages/Vendas/index.jsx';
import Produtos from './pages/Produtos/index.jsx';
import Dashboard from './pages/Dashboard/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/cadastro",
        element: <Cadastro/>
      },
      {
        path: "/vendas",
        element: <Vendas/>
      },
      {
        path: "/produtos",
        element: <Produtos/>
      },
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
