import React from "react";
import "./assets/images/registry.png";

export default class Sidebar extends React.PureComponent {

    render() {
        return (<div>

            <p class="text-center">{this.props.details.message}</p>
            <a href={this.props.details.link} class="grid">
                <img class="margin-auto" alt="Registry" src={this.props.details.image}></img>
            </a>
        </div>);
    }
}