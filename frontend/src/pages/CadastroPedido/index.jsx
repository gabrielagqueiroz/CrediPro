import React from 'react';
import { useParams } from 'react-router-dom';
import FormCadastroPedido from '../../components/FormCadastroPedido';


export default function CadastroPedido() {
  const { userId } = useParams();
  return (
    <div>
      <FormCadastroPedido userId={userId}/>
    </div>
  );
}
