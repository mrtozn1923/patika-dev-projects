import './App.css';
import Header from './components/Header';
import WeatherContainer from './components/WeatherContainer';
import { CityProvider } from './context/CityContext';

function App() {
  return (
    <CityProvider>
      <div className='container'>
        <Header />
        <WeatherContainer />
      </div>
    </CityProvider>
  );
}

export default App;
