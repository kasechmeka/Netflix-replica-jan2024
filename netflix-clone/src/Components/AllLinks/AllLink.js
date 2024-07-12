
import React, { Component } from 'react';

class AllLink extends Component {
    render() {
        return (
            <li>
                <a className="list-unstyled" href = {this.props.linkUrl}>
                    {this.props.linkName}
                </a>
            </li>
        );
    }
}

export default AllLink;
