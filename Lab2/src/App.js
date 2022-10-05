import './App.css';
import countries from 'world-countries'
import CountryInfo from './CountryInfo'
import DetailedPage from './DetailedPage'
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Biggestfifteen = ({data}) => {
  data.sort((a, b) => b.area - a.area);
  const Antar = data.filter(data => data.name.common !== 'Antarctica');

  const [text, setText] = useState(""); 

  function changeInput(event) {
    setText(event.target.value);
  }

  const matchSearch = countryName => {
    const lowerCaseCountry = countryName.toLowerCase();
    const lowerCaseText = text.toLowerCase();
  
    return lowerCaseCountry.indexOf(lowerCaseText) === 0;
  }

  const filteredCountries = Antar.filter(country => matchSearch(country.name.common));

  return(
    <div>
      <h1>Country website - Lab 2</h1>
      <h3>Search for country</h3>
      <input type="text" placeholder="Type here..." onChange={changeInput} />
      {filteredCountries.map((country, plats) => (
        <CountryInfo key={country.cca3} data={country} detaljer = {plats<5} /> 
      ))}
    </div>

  );
};

function App(){
  return(
    <Router>
      <div>
      <nav>
          <ul>
              <Link to="/">All countries</Link>
          </ul>
        </nav>
        <Switch>
          <Route path = "/country/:id" children ={<DetailedPage/>}/>
          <Route path="/">
            <CountryList/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function CountryList() {
  return (
    <div>
    <Biggestfifteen data = {countries}/>
    </div>   
  );
}

export default App;
