import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the Api component
function Api() {
    const setData = (data) =>{}
    const fetchData = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const result = await response.json();
          setData(result);
          console.log(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    
      };
  
  

    return (
        <div>
           
            {/* Your component JSX goes here */}
        </div>
    );
    }

export default Api;
