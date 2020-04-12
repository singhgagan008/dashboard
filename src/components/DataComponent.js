import React from "react";
import "antd/dist/antd.css";
import CardTable from "../components/CardTable";
import { Table, Layout, Menu } from "antd";
import { COLUMN_NAME, PAGE_SIZE } from "../constants";
import {getSummary} from "../utils/APIUtils";
import './component.css';

class DataComponent extends React.Component {  
  state = {
    totalConfirmed:'',
    totalDeaths:'',
    totalRecovered:'',
    lastUpdated:'',
    data:''
  }

  loadPromise(){
    let promise = getSummary();
    promise            
        .then(response =>
          response.json().then(json =>
            {
              this.setState({
                totalConfirmed: json.Global.TotalConfirmed ,
                totalDeaths: json.Global.TotalDeaths,
                totalRecovered: json.Global.TotalRecovered,
                lastUpdated: json.Date,
                data: json.data.Countries
              })
            }
          )  
        )
        .catch(error => console.log(error));
  }

  componentDidMount(){
    this.loadPromise();
  }
  
  render() {
    const columns = COLUMN_NAME;
        
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        country: 'ABC',
        totalConfirmed: 123456,
        newConfirmed: 12345,
        totalDeaths: 1234,
        newDeaths: 123,
        newRecovered: 12,
        totalRecovered: 1
      });
    }
      
    return (
      <div className="dashContainer">
        <div className = 'last-updated' >{this.state.lastUpdated}</div>
        <CardTable 
          totalCases = {this.state.totalConfirmed}
          totalRecovered = {this.state.totalRecovered}
          totalDeaths = {this.state.totalDeaths}
        />
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: PAGE_SIZE }}
          scroll={{ y: 240 }}
        />
      </div>
    );
  }
}

export default DataComponent;