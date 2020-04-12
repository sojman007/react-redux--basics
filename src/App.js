import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const count = useSelector(state => state.count);
  const increaseCount = useDispatch();

  return (
    <div className="App">
      Learn React With Redux
      <p>
        <h1>
          Count : {count}
        </h1>
      </p>

      <p>

        <button onClick={() => increaseCount({type:'INCREMENT_COUNT'})} >Increment Here</button>

      </p>

    </div>
  );
}

export default App;
