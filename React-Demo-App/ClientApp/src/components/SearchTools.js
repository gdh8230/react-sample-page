import React, { Component } from 'react';
import {    Filter,    Operators,
        TextFilter,   
            BooleanFilter, } from "@progress/kendo-react-data-tools";

export class SearchTools extends Component{

    state= {
        show: true,
        filter: {
            logic: "and",
            filters: [
            ],
          },
    };
    
    onFilterChange = (event) => {
        this.setState({
          filter: event.filter,
        });
      };
    

  render(){
        return (
            <p>
        <Filter locale="ko-KR"
            value={this.state.filter}
            onChange={this.onFilterChange}
            fields={[
              {
                  name: "COMPANY_ID",
                  label: "고객코드",
                  filter: TextFilter,
                  operators: Operators.text,
              },
              {
                  name: "ECUST_NAME",
                  label: "고객명",
                  filter: TextFilter,
                  operators: Operators.text,
              },
              {
                  name: "USE_YN",
                  label: "사용유무",
                  filter: BooleanFilter,
                  operators: Operators.boolean,
              },
              {
                  name: "ADD_DT",
                  label: "등록일",
                  filter: TextFilter,
                  operators: Operators.date,
              },
              {
                  name: "DT",
                  label: "계약일",
                  filter: TextFilter,
                  operators: Operators.date,
              },
            ]}
        />  </p>
      );
  }
 
};