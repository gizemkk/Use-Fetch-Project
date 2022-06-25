
import './App.css';
import useFetch from  './useFetch';
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";


function App() {

  const h1Ref = useRef();

  useEffect(() => {
    gsap.to(h1Ref.current, {  rotation: 360, });
  });


  const BASE_URL = "https://reqres.in/api/users/"

  const {data, loading, error}= useFetch(BASE_URL);


  return (
   <div className="App">
      <h1 ref={h1Ref}>Data Fetching  </h1>
      {loading && <h3>..loading </h3>}
      {error && <h3>error: something went wrong</h3>}
      <div>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
        </div>
    </div>
  ); 
}

export default App;
