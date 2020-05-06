import React from "react";
import "antd/dist/antd.css";
import CardTable from "../components/CardTable";
import { Table } from "antd";
import { COLUMN_NAME, PAGE_SIZE } from "../constants";
import {getSummary} from "../utils/APIUtils";
import './component.css';

class DataComponent extends React.Component {  
  state = {
    totalConfirmed:'',
    totalDeaths:'',
    totalRecovered:'',
    newConfirmed: '',
    newDeaths: '',
    newRecovered: '',
    lastUpdated:'',
    countriesData:'',
    data:''
  }

  loadPromise(){
    let promise = getSummary();
    promise            
        .then(response =>
          response.json().then(json =>
            {
              const data = [];
              data.push({
                key: 0,
                country: 'World',
                totalConfirmed: json.Global.TotalConfirmed,
                newConfirmed: json.Global.NewConfirmed,
                totalDeaths: json.Global.TotalDeaths,
                newDeaths: json.Global.NewDeaths,
                newRecovered: json.Global.NewRecovered,
                totalRecovered: json.Global.NewRecovered
              });

              for (let i = 0; i < json.Countries.length; i++) {
                data.push({
                  key: i+1,
                  country: json.Countries[i].Country,
                  totalConfirmed: json.Countries[i].TotalConfirmed,
                  newConfirmed: json.Countries[i].NewConfirmed,
                  totalDeaths: json.Countries[i].TotalDeaths,
                  newDeaths: json.Countries[i].NewDeaths,
                  newRecovered: json.Countries[i].NewRecovered,
                  totalRecovered: json.Countries[i].TotalRecovered
                });
              }

              this.setState({
                totalConfirmed: json.Global.TotalConfirmed,
                totalDeaths: json.Global.TotalDeaths,
                totalRecovered: json.Global.TotalRecovered,
                newConfirmed: json.Global.NewConfirmed,
                newDeaths: json.Global.NewDeaths,
                newRecovered: json.Global.NewRecovered,
                lastUpdated: json.Date,
                countriesData: json.Countries,
                data: data
              });
            }
          )  
        )
        .catch(error => console.log(error));
  }

  componentDidMount(){
    this.loadPromise();
    //this.getTableData();
    console.log(this.state.data);
  }

  componentDidUpdate() {
    console.log('Component did update!')
  }
  
  render() {
    const columns = COLUMN_NAME;
    return (
      <div className="dashContainer">
        <div className = 'last-updated' >{this.state.lastUpdated}</div>
        <CardTable 
          totalCases =  {this.state.totalConfirmed}
          totalRecovered = {this.state.totalRecovered}
          totalDeaths = {this.state.totalDeaths}
        />
        <Table
          columns={columns}
          dataSource={this.state.data}
          pagination={{ pageSize: PAGE_SIZE }}
          scroll={{ y: 1240 }}
        />
      </div>
    );
  }
}

export default DataComponent;