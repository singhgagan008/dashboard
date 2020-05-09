import React from 'react';
import { Table } from "antd";
import { COUNTRY_LIST, PAGE_SIZE } from '../constants'
import {getCountryList} from '../utils/APIUtils'

class CountryListTable extends React.Component {
    state = {
        countryList: []
    }

    loadCountryList(){
        let promise = getCountryList();
        promise.then(response =>
            response.json().then(json =>
            {
                const countryArray = [];
                for (let i = 0; i < json.length; i++) {
                    countryArray.push({
                        key: json[i].Slug,
                        country: json[i].Country
                    })
                }
                this.setState({
                    countryList:countryArray
                }
                        
                    
                )
            })
        )
    }

    componentDidMount(){
        this.loadCountryList();
    }

    componentDidUpdate(){
        console.log(this.state.countryList);
    }
    
    render(){
        if(this.state.countryList.length > 0) {
            return ( 
                <Table 
                    dataSource={this.state.countryList} 
                    columns={COUNTRY_LIST}
                    pagination={{ pageSize: PAGE_SIZE }}
                    scroll={{ y: 840 }}
                    size="small"
                />
            );
        }
        return(<div></div>);        
    }
}

export default CountryListTable;