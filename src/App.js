import './App.css';
import PromptState from './context/PromptState';
import Form from '../src/components/Form/Form'
import Image from './components/Image/Image';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
// import Spinner from './components/Spinner/Spinner';
function App() {
  return (
    <PromptState>
      <Navbar/>
      <Form/>
      {/* <Spinner/> */}
      <Error/>
      <Image/>
      <Footer/>
    </PromptState>
    );
}

export default App;
