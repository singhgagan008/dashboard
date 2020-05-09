import React from 'react';
import { Table } from "antd";
import { COUNTRY_LIST } from '../constants'

class CountryListTable extends React.Component {
    render(){
        const dataSource = [
            {
            key: '1',
            name: 'Mike'
            }
        ];
        
        return ( <Table dataSource={dataSource} columns={COUNTRY_LIST} />);
    }
}

export default CountryListTable;