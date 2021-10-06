import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <h3>Filter by Medium</h3>
                <select onChange={this.props.handleChange}>
                <option value="">all</option>
                      {
                          this.props.options.map(entry => 
                              <option key={entry.category} value={entry.id}>{entry.category}</option>
                          )
                      }
                </select>
            </div>
        )
    }
}
