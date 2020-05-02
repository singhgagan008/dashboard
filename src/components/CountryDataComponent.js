import React from 'react';
import {getCountrySummary} from "../utils/APIUtils";
import MyChart from './Graph';
 
class CountryDataComponent extends React.Component {
    state={
        countryName: '',
        data: []
    }

    loadPromise(){
        let promise = getCountrySummary(this.props.location.state.countryName.text);
        promise            
        .then(response =>
          response.json().then(json => {this.formDataObject(json)}
        ))
    }

    formDataObject(responseArray){
        const dataObject = [];
        responseArray.forEach(element => {
            dataObject.push({
                'date': Date.parse(element.Date),
                'cases': element.Confirmed
            });
        });
        this.setState({
            data: dataObject
        });
        console.log(this.state.data);
    }

    componentDidMount(){
        this.loadPromise();
        
    }

    render(){
        if(this.state.data.length > 0) {
            return(
                <div>
                    <MyChart data= {this.state.data}
                    />
                </div>
            )
        }
        return(<div></div>);
    }
}

export default CountryDataComponent;