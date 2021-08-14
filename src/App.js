import {Profile} from "./profile/Profile"
//import HandleName from "./profile/HandleName";
import './App.css';

function App() {
  
  return (
    <div style={{color: "blue", textAlign: "center"}}>
      <Profile  fullName="First-Name" bio="Second-Name" profession="Year y/y/y/y"/>
    </div>
  );
}

export default App;