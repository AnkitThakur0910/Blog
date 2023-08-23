import logo from './logo.svg';
import './App.css';
import Readblog from './components/Readblog';
import Upload from './components/Upload';

function App() {
  return (
    <div className="App">
      {/* <div className='trape'>
  <div className='box-design'>
  
</div>
</div> */}
     {/* <div className='formy'>
       <form>
       <span className='sign-in' >Sign <span style={{color : "#B8336A"}}>In</span></span> 
        <input type='text' placeholder='Enter your name' name='name'></input>
        <input type='email' placeholder='Enter your email' name='email'></input>
        <input type='password' placeholder='Enter your password'></input>
        <input type = 'password' placeholder='confirm password'></input>
        <button type='submit'>Submit</button>
       </form>
     </div> */}
     <Readblog></Readblog>
     
      {/* <Upload></Upload> */}
    </div>
  );
}

export default App;
