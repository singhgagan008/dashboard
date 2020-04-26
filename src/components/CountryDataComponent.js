import React from 'react';


class CountryDataComponent extends React.Component {
    state={
        countryName:'xchkjxkcjk',
    }
    
    componentDidMount(){
        console.log(this.props.location.state.countryName.text);
    }

    render(){
        return(
        <div>{this.props.location.state.countryName.text}</div>
        )
    }
}

export default CountryDataComponent;