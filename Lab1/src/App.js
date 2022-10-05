import './App.css';
import countries from 'world-countries'
import CountryInfo from './CountryInfo'
import React from 'react'
import textApp from './Search'

const Biggestfifteen = ({data}) => {
  data.sort((a, b) => b.area - a.area);
  const Antar = data.filter(data => data.name.common !== 'Antarctica');
  const slicing = Antar.slice(0,15);
  console.log(slicing);
  
  return(
    <div>
      <textApp/> 
      {slicing.map((country, plats) => (
        <CountryInfo key={country.cca3} data={country} detaljer = {plats<5} /> 
      ))}
    </div>

  );
};

function App() {
  return (
    <div>
    <Biggestfifteen data = {countries}/>
  
    </div>   
  );
}

export default App;
