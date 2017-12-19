import React from 'react';

const Resetter = (propsIn) => {
  const caller = (e) => {
  	e.preventDefault()
    //console.log("Reset function came back in propsIn?: ",propsIn.resetFunc != undefined);
    propsIn.resetFunc();
  }
  return (
    <button type="button" className="btn btn-success" onClick={caller}>Reset Game</button>
  )
}

export default Resetter