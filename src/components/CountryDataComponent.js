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
        console.log(this.state.data);
    }

    componentDidMount(){
        this.loadPromise();
        
    }

    render(){
        if(this.state.totalCases.length > 0) {
            return(
                <div>
                    <MyChart data= {this.state.totalCases} label={'Total Cases'}/>
                    <MyChart data= {this.state.deaths} label={'Total Deaths'}/>
                    <MyChart data= {this.state.recoveredCases} label={'Recovered Cases'}/>
                </div>
            )
        }
        return(<div></div>);
    }
}

export default CountryDataComponent;