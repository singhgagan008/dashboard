import React from 'react';
import {Link} from 'react-router-dom';

export const API_BASE_URL = 'https://api.covid19api.com';

export const COLUMN_NAME = [
    {
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
        <Link
          to ={{ 
            pathname:`country/${text.toLowerCase()}`,
            state: {
              countryName: {text}
            }
          }}
        >{text}
        </Link>)
    },
    {
      title: "Total Confirmed",
      dataIndex: "totalConfirmed",
      width: 150,
      sorter: {
        compare: (a, b) => a.totalConfirmed - b.totalConfirmed,
        multiple: 2,
      },
    },
    {
      title: "New Confirmed",
      dataIndex: "newConfirmed",
      width: 150,
      sorter: {
        compare: (a, b) => a.newConfirmed - b.newConfirmed,
        multiple: 3,
      },
    },
    {
      title: "Total Deaths",
      dataIndex: "totalDeaths",
      width: 150,
      sorter: {
        compare: (a, b) => a.totalDeaths - b.totalDeaths,
        multiple: 4,
      },
    },
    {
      title: "New Deaths",
      dataIndex: "newDeaths",
      width: 150,
      className:"deaths-column",
      sorter: {
        compare: (a, b) => a.newDeaths - b.newDeaths,
        multiple: 5,
      },
    },
    {
      title: "Total Recovered",
      dataIndex: "totalRecovered",
      width: 150,
      sorter: {
        compare: (a, b) => a.totalRecovered - b.totalRecovered,
        multiple: 6,
      },
    },
    {
      title: "New Recovered",
      dataIndex: "newRecovered",
      width: 150,
      sorter: {
        compare: (a, b) => a.newRecovered - b.newRecovered,
        multiple: 7,
      },
    },
    {
      title: "Recovery Rate",
      dataIndex: "recoveryRate",
      width: 150,
      sorter: {
        compare: (a, b) => a.recoveryRate - b.recoveryRate,
        multiple: 8,
      },
    }
  ];

export const PAGE_SIZE = 50;

export const COUNTRY_LIST = [{
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
  }
}];