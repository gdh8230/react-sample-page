import React, { Component } from 'react';
import { Grid, GridColumn,
    getSelectedState,
    getSelectedStateFromKeyDown, } from "@progress/kendo-react-grid";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { getter } from "@progress/kendo-react-common";
import { Splitter } from "@progress/kendo-react-layout";
import {CustInfo_Detail_Header} from "./CustInfo_Detail_Header";
import cust from "../cust.json";
import { process } from "@progress/kendo-data-query";
import { AutoComplete } from "@progress/kendo-react-dropdowns";
import { Checkbox } from "@progress/kendo-react-inputs";

const selectionModes = [
    {
      value: "single",
      label: "Single selection mode",
    },
    {
      value: "multiple",
      label: "Multiple selection mode",
    },
  ];

const DATA_ITEM_KEY = "COMPANY_ID";
const SELECTED_FIELD = "selected";
const idGetter = getter(DATA_ITEM_KEY);

export class CustInfo extends Component {
    constructor(props){
    super(props);
     this.state = {
        data: cust.map((dataItem) =>
          Object.assign(
            {
              selected: false,
            },
            dataItem
          )
        ),
        selectedState: {},
        dragEnabled: true,
        cellEnabled: true,
        selectionMode: selectionModes[1].value,
        panes: [
            {
            },
            {
                size: "30%",
                collapsible: true,},
          ],
        skip: 0,
        take: 20,
        sort: [
          {
            field: "orderDate",
            dir: "desc",
          },
        ],
      };
        
    }

      onSelectionChange = (event) => {
        console.log( this.state.selectedState);
        // console.log( DATA_ITEM_KEY );
        const selectedState = getSelectedState({
          event,
          selectedState: this.state.selectedState,
          dataItemKey: DATA_ITEM_KEY,
        });
        this.setState({
          selectedState,
        });
        console.log( this.state.selectedState);
      };  
      onKeyDown = (event) => {
        const selectedState = getSelectedStateFromKeyDown({
          event,
          selectedState: this.state.selectedState,
          dataItemKey: DATA_ITEM_KEY,
        });
        this.setState({
          selectedState,
        });
      };
      onDragChange = (event) => {
        this.setState({
          dragEnabled: event.value,
        });
      };
      onCellChange = (event) => {
        this.setState({
          cellEnabled: event.value,
        });
      };
      onSelectionModeChange = (event) => {
        this.setState({
          selectionMode: event.value,
        });
      };
      onChange = (event) => {
        this.setState({
          panes: event.newState,
        });
      };

      onFilterChange = (event) => {
        this.setState({
          filter: event.filter,
        });
      };
      
      handleSelect = (e) => {
        this.setState({
          selected: e.selected,
        });
      };
    render() {
        return (
            <>
            <Splitter
              style={{
              }}
              panes={this.state.panes}
              onChange={this.onChange}
            >
              <div >
                <h3>&nbsp;????????????</h3>
                <p style={{
                  // border: '1px solid black',
                  }}>
                  &nbsp;&nbsp;???????????? :&nbsp;
                  <AutoComplete
                    style={{
                      width: "150px",
                    }}
                    data={cust}
                    placeholder="????????????"
                  />&nbsp;&nbsp;&nbsp;
                  ????????? :  &nbsp;
                  <AutoComplete
                    style={{
                      width: "150px",
                    }}
                    data={cust}
                    placeholder="?????????"
                  />&nbsp;&nbsp;&nbsp;
                  ???????????? :&nbsp;
                  <Checkbox   defaultChecked={false} 
                  />
                </p>
                <Grid
                    style={{
                    height: "100%",
                    }}
                    data={process(this.state.data.map((item) => ({
                            ...item,
                            [SELECTED_FIELD]: this.state.selectedState[idGetter(item)],
                        })),{
                          skip: this.state.skip,
                          take: this.state.take,})}
                    dataItemKey={DATA_ITEM_KEY}
                    sortable={true}
                    // filterable={true}
                    // groupable={true}
                    pageable={{
                      buttonCount: 4,

                      pageSizes: true,
                    }}
                    selectedField={SELECTED_FIELD}
                    selectable={{
                        enabled: true,
                        drag: this.state.dragEnabled,
                        cell: this.state.cellEnabled,
                        mode: this.state.selectionMode,
                    }}
                    navigatable={true}
                    onSelectionChange={this.onSelectionChange}
                    onKeyDown={this.onKeyDown}
                  >
                      <GridColumn field="COMPANY_ID" title="????????????" width="100px" />
                      <GridColumn field="ECUST_NAME" title="?????????" width="250px" />
                      <GridColumn title="???????????? " />
                      <GridColumn title="??????????????? " />
                      <GridColumn field="PRTN_TYPE" title="???????????? " />
                  </Grid>
                </div>
                <div>
                    <h3>???????????? ??????</h3>
                    <CustInfo_Detail_Header/>
                    <TabStrip selected={this.state.selected} onSelect={this.handleSelect}>
                      <TabStripTab title="????????????">
                        <p>Tab ????????????</p>
                      </TabStripTab>
                      <TabStripTab title="????????????">
                        <p>Tab ????????????</p>
                      </TabStripTab>
                      <TabStripTab title="????????????">
                        <p>Tab ????????????</p>
                      </TabStripTab>
                      <TabStripTab title="????????????">
                        <p>Tab ????????????</p>
                      </TabStripTab>
                      <TabStripTab title="???????????????">
                        <p>Tab ???????????????</p>
                      </TabStripTab>
                      <TabStripTab title="????????????">
                        <p>Tab ????????????</p>
                      </TabStripTab>
                      <TabStripTab title="?????????">
                        <p>Tab ?????????</p>
                      </TabStripTab>
                      <TabStripTab title="????????????">
                        <p>Tab ????????????</p>
                      </TabStripTab>
                      <TabStripTab title="????????????">
                        <p>Tab ????????????</p>
                      </TabStripTab>
                    </TabStrip>
                </div>
        </Splitter>
            </>
        );
    }
}
