import {
    useParams
  } from "react-router-dom";
import countries from 'world-countries'
import CountryInfo from "./CountryInfo";

const getCountryByCca3 = (cca3) => {
    return countries.find(country => country.cca3 === cca3)
}

function DetailedPage() {
    let {id} = useParams();

    const borderCountries = getCountryByCca3(id).borders;
    borderCountries.sort((a,b) => getCountryByCca3(b).area - getCountryByCca3(a).area);

    return (
      <div>
            <h1>Countries that's has a border to <i>{getCountryByCca3(id).name.common}</i></h1>
            { borderCountries.map((cca3) => (
            <CountryInfo key = {cca3} data = {getCountryByCca3(cca3)}/>
            ))}
      </div>
    );
  }

  export default DetailedPage;