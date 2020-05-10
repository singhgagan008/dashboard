import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;

class SearchComponent extends React.Component {

    onChange(value) {
      console.log(`selected ${value}`);
    }

    onBlur() {
      console.log('blur');
    }

    onFocus() {
      console.log('focus');
    }

    onSearch(val) {
      console.log('search:', val);
    }

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
      console.log(countryList);
      for (let i = 0; i < countryList.length; i++) {
        children.push(<Option key={countryList[i].key}>{countryList[i].country}</Option>);
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