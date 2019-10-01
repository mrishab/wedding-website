import React from "react";
import SidebarNavItem from "./sidebar-nav-item";

import "./assets/css/sidebar-nav.css";

export default class SidebarNav extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            isLightBg: false
        }
    }

    render() {
        return (<nav className={`grid transition sidebar ${this.state.isLightBg ? "lighter": ""}`}>
            {this.generateItemList()}
        </nav>);
    }

    setLightBackground(b) {
        this.setState({
            isLightBg: b
        })
    }

    generateItemList() {
        const items = [];
        this.state.items.forEach(item => {
            items.push(<SidebarNavItem key={item.id} setLightBackground={this.setLightBackground.bind(this)} scrollSidebar={this.props.scrollSidebar} targetId={item.id}>{item.title}</SidebarNavItem>);
        });
        return items;
    }
}