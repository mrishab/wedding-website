import React from "react";

import "./assets/css/sidebar-nav-item.css";

export default class SidebarNavItem extends React.Component {

    render() {
        return (<div className="transition transition-fast pointer text-center menu-item" onClick={e => this.handleClick(e)}>
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

        let isLightBg = false;
        if (targetPositionTop > 100) {
            isLightBg = true;
        }
        this.props.setLightBackground(isLightBg);
    }
}