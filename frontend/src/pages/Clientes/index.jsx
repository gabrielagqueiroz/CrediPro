import React from 'react';
import Table from "../../components/Table";


export default function Clientes(props) {
    const [data, setData] = React.useState([]);
    
    React.useEffect(() => {
        fetch('http://localhost:8000')
        .then(res => res.json())
        .then(data => {
            setData(data)
            console.log(data)
        });
    }, [data])   // TRATAR POSSIVEIS ERROS COM O TRY CATCH
  
  return (
    <div>
      <Table data={data}/>
    </div>
  );
}
