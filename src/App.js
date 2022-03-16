import './App.css';
import CounterA from './functional/Counter';

import CounterB from './class/Counter';
import ListA from './class/List';
import ListB from './functional/List';

function App() {
  return (
    <div className="border">
        <div  className="border">
          <h1>Functional:</h1>
          {/* <CounterA header='Functional Counter 1' /> */}
          <ListB />
        </div>
        <div  className="border">
        <h1>Class:</h1>
         {/* <CounterB header='Class Counter 1' /> */}
         <ListA />
        </div>
    </div>
  );
}
export default App; 