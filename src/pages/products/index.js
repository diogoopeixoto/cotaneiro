import React from 'react';
import Table from '../../components/Table';
import BasePage from '../BasePage';
import ProductModal from './components/ProductModal';
function Products  () {

    const columns = ["name", "price"];
  const  rows = [
    {id: 1, name: "Caneta", price: 20.0},
  {id: 2, name: "Carro", price: 20.0},
  {id: 3, name: "celular", price: 20.0},
  {id: 4, name: "lampada", price: 20.0},
  {id: 5, name: "flor", price: 20.0},

];
  
  return (

      <BasePage>
        <Table columns={columns} rows={rows}/>

        <ProductModal onClose={() =>{}}  open={true} />
      </BasePage>
     
     
      );
    }
    
    export default Products;