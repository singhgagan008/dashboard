import React from 'react';
import {getCountrySummary} from "../utils/APIUtils";
import { Chart } from 'react-charts';
import MyChart from './Graph';
 
class CountryDataComponent extends React.Component {
    state={
        countryName:'xchkjxkcjk',
    }

    loadPromise(){
        // let promise = getCountrySummary(this.props.location.state.countryName.text);
        // promise            
        // .then(response =>
        //   response.json().then(json => console.log(json)
        // ))
    }
    componentDidMount(){
        this.loadPromise();
      }

    render(){
        return(
            <div>
                <MyChart />
            </div>
        )
    }
}

export default CountryDataComponent;