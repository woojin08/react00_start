import { useState } from 'react';
import Test from '../list';

const App = () => {
  const [num, setNum] = useState(1);
  const numHamdler = () => (setNum(num + 1))
  return (
    <>
      <h1>{num}</h1>

      {/* {<button oClick={numHamdler}>num plus</button>} */}
      <Test list="어피치" name="파이브피치" age={21} onClick={numHamdler} />
      <Test list="라이언" name="파이브피치" age={21} onClick={numHamdler} />
      <Test list="콘빠냐" name="파이브피치" age={21} />
      <Test list="조르디" name="파이브피치" age={21} />
    </>
  )
}
export default App;