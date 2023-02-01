
import './App.css';
import NavBar from './NavBar';
import IntroVideo from './IntroVideo';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Divider } from '@mui/material';

// Render a YouTube video player

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header />
      <IntroVideo/>
      <Main />
      
      <Footer />
    </div>
  );
}

export default App;
