import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../index.css";
import "./app.css";
import { Table, Layout, Menu } from "antd";
import AppHeader from "../common/AppHeader";
import CardComponent from "../components/MainCounter";

const columns = [
  {
    title: "Country",
    dataIndex: "country",
    width: 150
  },
  {
    title: "Total Confirmed",
    dataIndex: "totalConfirmed",
    width: 150
  },
  {
    title: "New Confirmed",
    dataIndex: "newConfirmed",
    width: 150
  },
  {
    title: "Total Deaths",
    dataIndex: "totalDeaths"
  },
  {
    title: "New Deaths",
    dataIndex: "newDeaths",
    width: 150
  },
  {
    title: "Total Recovered",
    dataIndex: "newRecovered",
    width: 150
  },
  {
    title: "Total Deaths",
    dataIndex: "newDeaths"
  }
];

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
    newDeaths: 1
  });
}

const App = () => {
    return(
      <div>
        <AppHeader />
        <div className = 'last-updated' >
          Last updated: April 11, 2020, 21:21 GMT
        </div>
        <div className='card-table'>
          <CardComponent name={"Total Cases"} data={12345}/>
          <CardComponent name={"Total Recovered"} data={1234}/>
          <CardComponent name={"Total Deaths"} data={123}/>
        </div>
        <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 50 }}
        scroll={{ y: 240 }}
        />
      </div>
  );
}

export default App;

