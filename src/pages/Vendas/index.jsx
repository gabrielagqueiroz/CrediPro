import React from 'react';
import Table from "../../components/Table";


export default function Vendas() {
    const [data, setData] = React.useState([]);
    
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setData(data)
            console.log(data)
        });
    }, [])
  
  return (
    <div>
      <Table data={data}/>
    </div>
  );
}
