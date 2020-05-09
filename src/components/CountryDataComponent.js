import React from 'react';
import {getCountrySummary, getDate} from "../utils/APIUtils";
import MyChart from './Graph';
import CountryListTable from './CountryListTable';
 
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
                'date': getDate(element.Date),
                'cases': element.Confirmed
            });
            deathsObject.push({
                'date': getDate(element.Date),
                'cases': element.Deaths
            });
            recoveredCasesObject.push({
                'date': getDate(element.Date),
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
                <div>
                    <div className='countryList column left'>
                        <CountryListTable/>
                    </div>
                    <div className='charts-container column right'>
                        <MyChart data= {this.state.totalCases} label={'Total Cases'} stroke = 'blue'/>
                        <MyChart data= {this.state.deaths} label={'Total Deaths'} stroke = 'red'/>
                        <MyChart data= {this.state.recoveredCases} label={'Recovered Cases'} stroke = 'green' />
                    </div>
                </div>
                
            )
        }
        return(<div></div>);
    }
}

export default CountryDataComponent;