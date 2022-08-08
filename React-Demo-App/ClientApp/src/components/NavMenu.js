import React, { Component } from 'react';
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import './NavMenu.css'
let kendokaAvatar =
  "https://www.telerik.com/kendo-react-ui-develop/images/kendoka-react.png";

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            // <header>
            //     <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
            //         <Container>
            //             <NavbarBrand tag={Link} to="/">ReactMemo</NavbarBrand>
            //             <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            //             <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            //                 <ul className="navbar-nav flex-grow">
            //                     <NavItem>
            //                         <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
            //                     </NavItem>
            //                     <NavItem>
            //                         <NavLink tag={Link} className="text-dark" to="/about">정보</NavLink>
            //                     </NavItem>
            //                     <NavItem>
            //                         <NavLink tag={Link} className="text-dark" to="/contact">연락처</NavLink>
            //                     </NavItem>
            //                     <NavItem>
            //                         <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
            //                     </NavItem>
            //                     <NavItem>
            //                         <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
            //                     </NavItem>
            //                     <NavItem>
            //                         <NavLink tag={Link} className="text-dark" to="/cust-info">고객 관리</NavLink>
            //                     </NavItem>
            //                 </ul>
            //             </Collapse>
            //         </Container>
            //     </Navbar>
            // </header>
            
            <>
                <AppBar>
                <AppBarSection>
                    <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
                    <span className="k-icon k-i-menu" />
                    </button>
                </AppBarSection>

                <AppBarSpacer
                    style={{
                    width: 4,
                    }}
                />

                <AppBarSection>
                    <h1 className="title">Mediage</h1>
                </AppBarSection>

                <AppBarSpacer
                    style={{
                    width: 32,
                    }}
                />

                <AppBarSection>
                    <ul>
                    <li>
                        <span>고객관리</span>
                    </li>
                    <li>
                        <span>About</span>
                    </li>
                    <li>
                        <span>Contacts</span>
                    </li>
                    </ul>
                </AppBarSection>

                <AppBarSpacer />

                <AppBarSection className="actions">
                    <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
                    <BadgeContainer>
                        <span className="k-icon k-i-bell" />
                        <Badge
                        shape="dot"
                        themeColor="info"
                        size="small"
                        position="inside"
                        />
                    </BadgeContainer>
                    </button>
                </AppBarSection>

                <AppBarSection>
                    <span className="k-appbar-separator" />
                </AppBarSection>

                <AppBarSection>
                    <Avatar type="image">
                    <img src={kendokaAvatar} />
                    </Avatar>
                </AppBarSection>
                </AppBar> 
                <style>{`
                        body {
                            background: #dfdfdf;
                        }
                        .title {
                            font-size: 18px;
                            margin: 0;
                        }
                        ul {
                            font-size: 14px;
                            list-style-type: none;
                            padding: 0;
                            margin: 0;
                            display: flex;
                        }
                        li {
                            margin: 0 10px;
                        }
                        li:hover {
                            cursor: pointer;
                            color: #84cef1;
                        }
                        .k-button k-button-md k-rounded-md k-button-solid k-button-solid-base {
                            padding: 0;
                        }
                        .k-badge-container {
                            margin-right: 8px;
                        }
                    `}</style>
            </>
        );
    }
}
