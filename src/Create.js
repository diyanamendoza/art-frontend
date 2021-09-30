import React, { Component } from 'react'
import request from 'superagent'

export default class Create extends Component {
    state = {
        title: '',
        artist: '',
        img: '',
        category: '',
        century: '',
    }

    handleSubmit = async e => {
        e.preventDefault();
        await request
        .post('https://stormy-thicket-09908.herokuapp.com/artworks')
        .send({
            title: this.state.title,
            artist: this.state.artist,
            img: this.state.img,
            category: this.state.category,
            century: this.state.century,
        })

        this.props.history.push('/')
    }

    titleChange = e => this.setState({ title: e.target.value })
    artistChange = e => this.setState({ artist: e.target.value })
    imgChange = e => this.setState({ img: e.target.value })
    categoryChange = e => this.setState({ category: e.target.value })
    centuryChange = e => this.setState({ century: e.target.value })

    render() {
        return (
            <form className='post-form'>
                <h3>Add an artwork to the gallery</h3>
                <label>Title <input onChange={this.titleChange} /></label>
                <label>Artist <input onChange={this.artistChange} /></label>
                <label>Image URL <input onChange={this.imgChange} /></label>
                <label>Category <input onChange={this.categoryChange} /></label>
                <label>Century <input onChange={this.centuryChange} /></label>
                <button>Submit</button>
            </form>
        )
    }
}
