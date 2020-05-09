import React from 'react';
import { getCountrySummary, getDate } from "../utils/APIUtils";
import MyChart from './Graph';
import CountryListTable from './CountryListTable';
import { withRouter } from 'react-router';

class CountryDataComponent extends React.Component {    
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
        // console.log("componentdidmount")
        // console.log(this.props.match.params);
        this.loadPromise(this.props.match.params.name);  
    }

    componentWillReceiveProps(nextProps) {
        // console.log(this.props);
        // if (nextProps.location.xyz.text != this.state.countryName) {
        //   this.setState({
        //       countryName:nextProps.location.xyz.text
        //   });
        // }
      }

    callbackFunction = (childData) => {
        this.setState({
            totalCases: []
        });
        this.loadPromise(childData);
    }

    render(){
        // const { params } = this.props.match;
        // console.log(params);
        // console.log(this.state);
        if(this.state.totalCases.length > 0) {
            return(
                <div>
                    <div className='countryList column left'>
                        <CountryListTable parentCallback = {this.callbackFunction}/>
                    </div>
                    <div className='charts-container column right'>
                        <MyChart data= {this.state.totalCases} label={'Total Cases'} stroke = 'blue'/>
                        <MyChart data= {this.state.deaths} label={'Total Deaths'} stroke = 'red'/>
                        <MyChart data= {this.state.recoveredCases} label={'Recovered Cases'} stroke = 'green' />
                    </div>
                </div>
                
            )
        } else {
            // this.loadPromise(params.name);
            return(<div></div>);
        }
    }
}

export default CountryDataComponent;