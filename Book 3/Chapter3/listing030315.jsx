import { useEffect, useState } from "react";

function RecordClicks(props) {
  const [count, setCount] = useState(getSavedState());

  function getSavedState() {
    const savedString = localStorage.getItem("currentCount");
    const initialCount = JSON.parse(savedString);
    console.log(`currentCount: ${initialCount}`);
    return initialCount || 0;
  }

  useEffect(() => {
    localStorage.setItem("currentCount", JSON.stringify(count));
  }, [count]);

  function incrimentCount() {
    const incrimented = count + 1;
    setCount(incrimented);
  }
  return <button onClick={incrimentCount}>Incriment and Store: {count}</button>;
}

export default RecordClicks;
