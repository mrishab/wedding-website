import React from 'react';
import * as $ from 'jquery'

import './assets/css/sidebar-nav-item.css';

export default class SidebarNavItem extends React.Component {

    render() {
        return (<div onClick={e => this.handleClick(e)}>
            {this.props.children}
        </div>);
    }

    get target() {
        if (!this._targetRef) {
            this._targetRef = document.getElementById(this.props.targetId);
        }
        return this._targetRef;
    }

    handleClick(event) {
        this._scrollSidebar();
    }

    _scrollSidebar() {
        const targetPositionTop = this.target.offsetTop;
        this.props.scrollSidebar(targetPositionTop);
    }
}