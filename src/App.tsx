import React from "react";
import "./App.css";

function App() {
  const data: number = 99999999;

  const op: number = data + 1;

  let st: string = "addition";

  var stop: string = st + op;

  const store:  number[] = [1, 2, 3, 4, 5, 6, 7];

  store[0]=56;
  console.log(store);
  const value: string[] = ["success0", "success1", "success2", "success3"];

  const material: {
    product?: string;
    quantity: number;
    batch?: number;
    MFG: string;
  } = {
    product: "parle -G",
    quantity: 5,

    MFG: "25 jan",
  };

  const bt = value.map((item) => {
    return (
      <>
        <button>{item}</button>
        <br></br>
        <br></br>
        <h1>{material.product}</h1>
      </>
    );
  });

 function addition(a:number,b:number):void{

  // how to add a type inside a function
  // Testing how git worl

  return(console.log(a+b));


 }
 addition(5,8);



 

  return (
    <>
      {op}
      <br></br>

      {stop}
      <br></br>

      {bt}
    </>
  );
}

export default App;
