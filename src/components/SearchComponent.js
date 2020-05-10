import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import {Link} from 'react-router-dom';

const { Option } = Select;

class SearchComponent extends React.Component {

    optionList(){
      const children = [];
      const countryList = this.props.list.sort(function(a,b){
        if(a.country < b.country){
          return -1
        }
        if(a.country > b.country){
          return 1
        }
        return 0
      }
      );
      for (let i = 0; i < countryList.length; i++) {
        children.push(
        <Option key={countryList[i].key}>
          <Link to={`/country/${countryList[i].country}`} className="nav-text">
            {countryList[i].country}
          </Link>
          
        </Option>);
      }
      return children;
    }

    render(){
        return(
          <div>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a Country"
                optionFilterProp="children"
                onChange={this.onChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onSearch={this.onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {this.optionList()}
            </Select>
          </div>
            )
    }
}

export default SearchComponent;