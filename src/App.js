import logo from './logo.svg';
import './App.css';
import ClockClassBased from "./components/clock-class-based";
import {ClockFunction} from "./components/clock-func";
import {useEffect, useState} from "react";
import React from 'react';
import ErrorBoundary from "./components/error-boundary";


function App() {
  const clockClassBasedRef = React.createRef();

  const [isClockShown, setIsClockShown] = useState(true);

  useEffect(() => {
    if (clockClassBasedRef.current) {
      //console.log(clockClassBasedRef.current.getProps())
    }


  }, [clockClassBasedRef]);

  return (
    <div className="App">
      <ErrorBoundary>
        {isClockShown && <ClockClassBased ref={clockClassBasedRef} data={'Hello Alexander'}/>}
        {isClockShown && <ClockFunction data={'Daniil'}/>}
      </ErrorBoundary>
      <button onClick={
        () => setIsClockShown(!isClockShown)}>
        Hide Clock</button>
    </div>
  );
}

export default App;
