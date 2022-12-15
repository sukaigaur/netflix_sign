import LogoNetflix from './Components/LogoNetflix';
import SignIn from './Components/SignIn';
import './index.css';

function App() {
  return (
    <div className="App">
      <LogoNetflix/>
      <div className='signIn'>
        <SignIn/> 
      </div>
    </div>
  );
}

export default App;
