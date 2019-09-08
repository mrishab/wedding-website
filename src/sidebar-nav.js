import React from 'react';
import SidebarNavItem from './sidebar-nav-item';

import './assets/css/sidebar-nav.css';

export default class SidebarNav extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        }
    }

    render() {
        return (<nav className="grid sidebar">
            {this.generateItemList()}
        </nav>);
    }

    generateItemList() {
        const items = [];
        this.state.items.forEach(item => {
            items.push(<SidebarNavItem key={item.id} scrollSidebar={this.props.scrollSidebar} targetId={item.id}>{item.title}</SidebarNavItem>);
        });
        return items;
    }
}