import React, { Component } from 'react';
import './ToolCard.css';
import default_img from './default_img.gif';

class ToolCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description,
            link: props.link,
            linkText: props.linkText,
            image: props.image
        }
    }
    
    render() {
        return (
            <div className="card p-2">
                <img src={this.props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.description}</p>
                <a href={this.props.link} className="btn btn-primary">{this.props.linkText}</a>
                </div>
            </div>
        );
    }
}

// Set default image
ToolCard.defaultProps = {
    image: default_img
};

export default ToolCard;