import React from 'react';
import MyChart from './Graph';

import { getCountrySummary, getDate } from "../utils/APIUtils";

class GraphComponent extends React.Component{

    state={
        countryName: '',
        totalCases: [],
        deaths: [],
        recoveredCases: []
    }

    loadPromise(params){
        let promise = getCountrySummary(params);
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
        this.loadPromise(this.props.countryName);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.countryName !== this.props.countryName){
            this.setState({
                totalCases: []
            }, () => {
                this.loadPromise(nextProps.countryName)
            });
        }
    }

    render(){
        if(this.state.totalCases.length > 0) {
            return(
                <div>
                    <MyChart id = "totalCases" data= {this.state.totalCases} label={'Total Cases'} stroke = 'blue'/>
                    <MyChart id = "deaths" data= {this.state.deaths} label={'Total Deaths'} stroke = 'red'/>
                    <MyChart id = "recovered" data= {this.state.recoveredCases} label={'Recovered Cases'} stroke = 'green' />
                </div>
            )
        }
        else {
            return(<div></div>);
        }
    }
}

export default GraphComponent;
