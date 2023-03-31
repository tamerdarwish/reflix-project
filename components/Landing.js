import './Landing.css';
import { BrowserRouter as Link } from 'react-router-dom';




const Landing = ({ usersData }) => {

  return (
    
    usersData.map(user => <span className ='user-card' style={{backgroundColor: user.backgroundColor}}><Link to={`/catalog/${user.id}`}>{user.name}</Link></span>)

    
 
  );
}

export default Landing;
