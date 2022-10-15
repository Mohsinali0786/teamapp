import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import SignupScreen from './screen/signupScreen';
import SigninScreen from './screen/signinScreen';

function App() {
  return (
    <div className="App">
      <SignupScreen/>
      {/* <SigninScreen/> */}
    </div>
  );
}

export default App;
