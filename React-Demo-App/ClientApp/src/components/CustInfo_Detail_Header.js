import React, { Component } from 'react';
import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";

export class CustInfo_Detail_Header extends Component {
  
  state = {
    rowHeight: 20,
    colWidth: 90,
  };
    render() {
        return (
            <>
              <GridLayout style={{
                  border: '1px solid black',
                  }}
                rows={[
                  {
                    height: this.state.rowHeight,
                    border: '1px solid black'
                  },
                  {
                    height: this.state.rowHeight,
                  },
                  {
                    height: this.state.rowHeight,
                  },
                  {
                    height: this.state.rowHeight,
                  },
                  {
                    height: this.state.rowHeight,
                  },
                ]}
                cols={[
                  {
                    width: this.state.colWidth,
                  },
                  {
                    width: this.state.colWidth,
                  },
                  {
                    width: this.state.colWidth,
                  },
                ]}
                gap={{
                  rows: 5,
                  cols: 5,
                }}
              >
                {[...Array(15)].map((_, i) => (
                  <GridLayoutItem className={`box box-${i}`} key={i} />
                ))}
              </GridLayout>
            </>
        );
    }
}
