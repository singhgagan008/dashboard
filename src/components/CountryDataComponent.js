import React from 'react';
import CountryListTable from './CountryListTable';
import GraphComponent from './GraphComponent';
import {withRouter} from "react-router-dom";

class CountryDataComponent extends React.Component {  

    state = {
        countryName: ''
    }
    
    callbackFunction = (childData) => {
        this.setState({
            countryName: childData
        });
    }

    componentDidMount(){
       this.setState({
        countryName: this.props.location.state ? this.props.location.state.countryName.text.toLowerCase() : window.location.pathname.replace('/country/','')
       })
    }

    componentDidUpdate(prev){
        if(this.props.location.pathname !== prev.location.pathname) {
            this.setState({
                countryName: this.props.location.pathname.replace('/country/','')
            })
        }
    }

    render(){
        if(this.state.countryName !== '') {
            return(
                <div>
                    <div className='countryList column left'>
                        <CountryListTable parentCallback = {this.callbackFunction}/>
                    </div>
                    <div className='charts-container column right'>
                        <GraphComponent countryName={this.state.countryName}/>
                    </div>
\
                </div>
                
            )
        }
        return <div></div>

    }
}

export default withRouter(props => <CountryDataComponent {...props}/>);