import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import  AppRouter from './config/route'


function App() {
  return (
    <div className="App">
      {/* <SignupScreen/> */}
      {/* <SigninScreen/> */}
      <AppRouter/>
    </div>
  );
}

export default App;
