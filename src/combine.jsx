
import { useState, useEffect } from "react";
function SuperCounter() {

    const [count, setCount] = useState(0);
    const [ message ,setMessage] = useState(" ");
      
        
        useEffect(function upadator() {
          console.log(`Count updated: ${count}`);
      
          if (count === 5) {
            setMessage('🎉 You hit 5 clicks! You legend.');
            console.log('🎉 You hit 5 clicks! You legend.');
          } else {
            setMessage('');
          }
        }, [count]);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 5)}>add</button>
        {count === 5 && <p>🎉 You reached 5! 🎉</p>}
      </div>
    );
}
  export default SuperCounter;
  