import './App.css';
import UserContextComponent from './components/UseContextComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseReducerComponent from './components/UserReducerComponent';
import UseRefComponent from './components/UseRefComponent';
import UseCallbackComponent from './components/UseCallback';
// import CustomHookComponent from './components/CustomHookComponent';

function App() {
  return (
    <div className="App">
      <h2>UseEffectComponent</h2>
      <UseEffectComponent />
      <hr />
      <h2>UserContextComponent</h2>
      <UserContextComponent />
      <hr />
      <h2>UseReducerComponent</h2>
      <UseReducerComponent />
      <hr />
      <h2>UseRefComponent</h2>
      <UseRefComponent />
      <hr />
      {/* <h2>CustomHookComponent</h2>
      <CustomHookComponent />
      <hr /> */}
      <h2>UseCallbackComponent</h2>
      <UseCallbackComponent />
      <hr />
    </div>
  );
}

export default App;
