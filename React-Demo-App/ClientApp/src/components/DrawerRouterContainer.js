import * as React from "react";
import { withRouter } from "react-router-dom";
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { Layout } from "./Layout";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
let kendokaAvatar =
  "https://www.telerik.com/kendo-react-ui-develop/images/kendoka-react.png";

const items = [
  {
    text: "Home",
    icon: "k-i-home",
    selected: true,
    route: "/",
  },
  {
    separator: true,
  },
  {
    text: "고객정보",
    icon: "k-i-bell",
    route: "/cust",
  },
  {
    separator: true,
  },
];

class DrawerRouterContainer extends React.Component {
  state = {
    expanded: true,
  };
  handleClick = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };
  onSelect = (e) => {
    this.setState({
      expanded: false,
    });
    this.props.history.push(e.itemTarget.props.route);
  };
  setSelectedItem = (pathName) => {
    let currentPath = items.find((item) => item.route === pathName);

    if (currentPath.text) {
      return currentPath.text;
    }
  };

  render() {
    let selected = this.setSelectedItem(this.props.location.pathname);
    return (
      <div>
        <div className="custom-toolbar">
                <AppBar>
                <AppBarSection>
                    <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base" onClick={this.handleClick}>
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
        </div>
        <Drawer
          expanded={this.state.expanded}
          position={"start"}
          mode={"push"}
          mini={true}
          items={items.map((item) => ({
            ...item,
            selected: item.text === selected,
          }))}
          onSelect={this.onSelect}
        >
          <DrawerContent>
            <Layout>{this.props.children}</Layout>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }
}

export default withRouter(DrawerRouterContainer);