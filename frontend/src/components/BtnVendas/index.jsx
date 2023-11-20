import React from 'react';
import { Link } from "react-router-dom";

export default function Vendas({ userId }) {
    return (
        <div>
            <Link to={`/cadastro/pedido/${userId}`}>
                <button className="waves-effect waves-light btn-small">
                    <i className="material-icons">add_circle</i>
                </button>
            </Link>
        </div>
    )
}