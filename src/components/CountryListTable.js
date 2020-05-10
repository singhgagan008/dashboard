import React from 'react';
import { Table } from "antd";
import { COUNTRY_LIST, PAGE_SIZE } from '../constants'
import {getCountryList} from '../utils/APIUtils'
import {Link,NavLink} from 'react-router-dom';

import SearchComponent from './SearchComponent'

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
                })
            })
        )
    }

    componentDidMount(){
        this.loadCountryList();
    }

    click(text) {
        this.props.parentCallback(text);
    }

    getCountryList() {
        return [{
            title: "Country",
            dataIndex: "country",
            width: 150,
            sorter: {
              compare: 
              function(a, b) {
                if (a.country > b.country) {
                  return 1;
                }
                if (a.country < b.country) {
                  return -1;
                }
                return 0;
              }
              ,
              multiple: 1,
            },
            render: (text,record) => (
                <div >
                <NavLink
                    to ={{ 
                      pathname:`/country/${text.toLowerCase()}`,
                      
                    }}
                    onClick={() => {
                        this.click(text);
                    }}
                    >
                    {text}
                </NavLink>
              </div>
              )
          }];
    }
    
    render(){
        if(this.state.countryList.length > 0) {
            return ( 
                <div>
                   <SearchComponent list={this.state.countryList}/>
                   <div></div>
                   <Table 
                    dataSource={this.state.countryList} 
                    columns={this.getCountryList()}
                    pagination={{ pageSize: PAGE_SIZE }}
                    scroll={{ y: 840 }}
                    size="small"
                    />
                </div>
            );
        }
        return(<div></div>);        
    }
}

export default CountryListTable;