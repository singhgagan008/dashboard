import React from "react";
import "antd/dist/antd.css";

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

const TableComponent = () => {
    return(
        <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 50 }}
        scroll={{ y: 240 }}
        />
  );
}

export default TableComponent;