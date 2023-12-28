import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Clientes from './pages/Clientes/index.jsx';
import CadastroCliente from './pages/CadastroCliente/index.jsx';
import Vendas from './pages/Vendas/index.jsx';
import Produtos from './pages/Produtos/index.jsx';
import Dashboard from './pages/Dashboard/index.jsx';
import CadastroPedido from './pages/CadastroPedido/index';


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
        path: "/cadastro/cliente",
        element: <CadastroCliente/>
      },
      {
        path: "/clientes",
        element: <Clientes/>,
      },
      {
        path:"/cadastro/pedido/:userId",
        element: <CadastroPedido/>
      },
      {
        path: "/vendas",
        element: <Vendas/>
      },
      {
        path: "/cadastro/produto",
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
