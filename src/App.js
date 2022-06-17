import { useSelector, useDispatch } from 'react-redux';
import Wrapper from './components/Wrapper/Wrapper';
import Screen from './components/Screen/Screen';
import Buttons from './components/Buttons/Buttons';



function App() {
  const dispatch = useDispatch();
  return (
    <div style={{padding:"30px"}} className="App">
      <Wrapper>
        <Screen />
          <Buttons /> 
      </Wrapper>
    </div>
  );
}

export default App;
