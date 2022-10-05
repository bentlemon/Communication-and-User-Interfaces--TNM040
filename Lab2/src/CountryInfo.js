import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const CountryInfo = ({data, width, detaljer}) => {

    width = (data.area/17098242*69 + "%"); 
    return(
      <div className = "first">
      <p>
        <p><b>{data.name.common} </b> {data.area} km<sup>2</sup></p>
          {detaljer && (
            <p>Huvudstad: {data.capital}<br></br>Region: {data.region}</p> 
          )}
          <Link to={"/country/" + data.cca3} >About the country</Link>
          <div className = "bars" style = {{width : width}}>
        </div> 
        </p>
      </div>
      
      );
    };

export default CountryInfo;