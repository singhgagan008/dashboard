import React from 'react';
import {getCountrySummary} from "../utils/APIUtils";
import MyChart from './Graph';
 
class CountryDataComponent extends React.Component {
    state={
        countryName: '',
        totalCases: [],
        deaths: [],
        recoveredCases: []
    }

    loadPromise(){
        let promise = getCountrySummary(this.props.location.state.countryName.text);
        promise            
        .then(response =>
          response.json().then(json => {
              this.formDataObject(json)
            }
        ))
    }

    formDataObject(responseArray){
        const totalCasesObject = [];
        const deathsObject = [];
        const recoveredCasesObject = [];
        responseArray.forEach(element => {
            totalCasesObject.push({
                'date': element.Date,
                'cases': element.Confirmed
            });
            deathsObject.push({
                'date': element.Date,
                'cases': element.Deaths
            });
            recoveredCasesObject.push({
                'date': element.Date,
                'cases': element.Recovered
            });
        });
        this.setState({
            totalCases: totalCasesObject,
            deaths: deathsObject,
            recoveredCases: recoveredCasesObject
        });
    }

    componentDidMount(){
        this.loadPromise();
        
    }

    render(){
        if(this.state.totalCases.length > 0) {
            return(
                <div className='charts-container'>
                    <MyChart data= {this.state.totalCases} label={'Total Cases'} stroke = 'blue'/>
                    <MyChart data= {this.state.deaths} label={'Total Deaths'} stroke = 'red'/>
                    <MyChart data= {this.state.recoveredCases} label={'Recovered Cases'} stroke = 'green' />
                </div>
            )
        }
        return(<div></div>);
    }
}

export default CountryDataComponent;