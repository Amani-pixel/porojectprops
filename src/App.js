import logo from './logo.svg';
import './App.css';
import Profil from './profil/Profile';


const App = () => (
 
  <div>
 <img src={"/grandprofilfb.jpg"} alt="profile" />
    
    <Profil name="AMANI FEIDI"bio='BIO' profission='PROFESSION' />
    
  </div>
 );

export default App;
