import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Piece extends Component {
    render() {
        return (
            <div className='piece'>
                <Link to={`/art/${this.props.id}`}>
                    <img className="art-img" src={this.props.img} alt={this.props.id} />
                    <h3>{this.props.title}</h3>
                    <h4>Artist: {this.props.artist}</h4>
                    <h4>{this.props.century} Century</h4>
                </Link>
            </div>
        )
    }
}