     import './App.css';
import Wrapper from './components/Wrapper';
import Display from './components/Display';
import BoxButton from './components/BoxButton';
import Button from './components/Button';
import ProviderCalc from './context/ContextCalc';


const btnValues = [
        [1,2,3,"+"],
        [4,5,6,"-"],
        [7,8,9,"*"],
      ["C",0,"=","/"],
]



function App() {
  return (
    <ProviderCalc className="App">
      <Wrapper>
        <Display/>
         <BoxButton>
          {btnValues.flat().map((btn, i)=> (
            <Button
            value = {btn}
            key = {i}
            />
          ))}
         </BoxButton>
      </Wrapper>
    </ProviderCalc>
  );
}

export default App;
