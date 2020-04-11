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
    title: "Name",
    dataIndex: "name",
    width: 150
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 150
  },
  {
    title: "Address",
    dataIndex: "address"
  }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  });
}

const App = () => {
    return(
      <div>
        <AppHeader />
        <div className = 'last-updated' >
          Last updated: April 11, 2020, 21:21 GMT
        </div>
        <CardComponent name={"Total Cases"} data={12345}/>
        <CardComponent name={"Total Recovered"} data={1234}/>
        <CardComponent name={"Total Deaths"} data={123}/>
        <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 100 }}
        scroll={{ y: 240 }}
        />
      </div>
  );
}

export default App;

