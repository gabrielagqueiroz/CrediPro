import React from 'react';
import { useParams } from 'react-router-dom';
import FormPedido from '../../components/FormPedido';


export default function CadastroPedido() {
  const { userId } = useParams();
  return (
    <div>
      <FormPedido userId={userId}/>
    </div>
  );
}
