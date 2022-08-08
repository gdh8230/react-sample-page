import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { StackLayout } from "@progress/kendo-react-layout";
import { Copyright } from './Shared/Copyright/Copyright';
import { Breadcrumb } from "@progress/kendo-react-layout";
import { Badge } from "@progress/kendo-react-indicators";

const initialData = [
  {
    id: "home",
    text: "Home",
    iconClass: "k-i-home",
  },
  {
    id: "cust",
    text: "고객관리",
  }
];

export class Layout extends Component {
  static displayName = Layout.name;

  constructor(props){
    super(props);
     this.state = {
        data:initialData,
        }
      };

    onClick = () => {
      console.log(this.state.show);
      this.setState({
        show: !this.state.show,
      });
    };

    handleItemSelect = (event) => {
      const itemIndex = this.state.data.findIndex(
        (curValue) => curValue.id === event.id
      );
      const newData = this.state.data.slice(0, itemIndex + 1);
      this.setState({
        data: newData,
      });
    };
    handleKeyDown = (event) => {
      if (event.nativeEvent.keyCode === 13) {
        const itemIndex = this.state.data.findIndex(
          (curValue) => curValue.id === event.id
        );
        const newData = this.state.data.slice(0, itemIndex + 1);
        this.setState({
          data: newData,
        });
      }
    };
  render () {
    return (
      <>
        <div className="example-wrapper">        
        <StackLayout
          orientation="vertical"
          align={{
            vertical: "top",
          }}
        >
        {/* <NavMenu />  */}
        
        <div>
        <Breadcrumb
          data={this.state.data}
          onItemSelect={this.handleItemSelect}
          onKeyDown={this.handleKeyDown}
        />
        </div>
        <k-table className="k-display-table">
            <tr>
              <k-table-td>
                <button
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                  onClick={this.onClick}
                >
                  <span class="k-icon k-i-search"></span>조회
                </button>
                <button
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                  onClick={this.onClick}
                ><span class="k-icon k-i-plus"></span>추가
                  <Badge size="large" shape="dot" themeColor="info" 
                    align={{
                      vertical: "bottom",
                      horizontal: "end",
                    }}><span class="k-icon k-i-plus"></span></Badge>
                </button>
                <button
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                  onClick={this.onClick}

                >
                  <span class="k-icon k-i-edit"></span>수정
                </button>
                <button
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                  onClick={this.onClick}
                >
                  <span class="k-icon k-i-delete"></span>삭제
                </button>
                <button
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                  onClick={this.onClick}
                >
                  <span class="k-icon k-i-print"></span>인쇄
                </button>
                <button
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                  onClick={this.onClick}
                >
                  <span class="k-icon k-i-excel"></span>Excel
                </button>
              </k-table-td>
            </tr>
        </k-table>
          </StackLayout>
          <Container>
            {this.props.children}
          </Container>
        </div>
      </>
    );
  }
}
