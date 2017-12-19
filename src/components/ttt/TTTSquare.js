import React from 'react';

//Pure component function
const Square = (propsIn) => {

  return (
    <button className="square" onClick={() => propsIn.clicker()}>
           {propsIn.value}
     </button>
  );
}

export default Square