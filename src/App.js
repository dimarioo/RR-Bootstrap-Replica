import './App.css';
import Navibar from './Components/navbar';
import Background from './components/backgroundackground'
import StoreListings from './Components/storelist';

function App() {
  return (
    <div className="App">
      <Navibar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;