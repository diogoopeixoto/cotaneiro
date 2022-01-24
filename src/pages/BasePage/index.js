import React from 'react';


import Navbar from '../../components/Navbar';

const BasePage = ({children}) => (
  <div>
    <Navbar />
    {children}
  </div>

)
export default BasePage;