import React, { Component } from 'react'
import Piece from './Piece.js';
import request from 'superagent'

export default class All extends Component {
    state = {
        id: '',
        artData: []
    }

    fetchSearch = async () => {
        try {
            // OLD GET: const response = await request.get('https://polar-temple-01678.herokuapp.com/art');
            const response = await request.get('https://stormy-thicket-09908.herokuapp.com/artworks');
            this.setState({
                artData: response.body,
            });
        } catch(e) {
            console.log(e.message);
        }
    }

    componentDidMount = async () => {
        await this.fetchSearch();
    }

    render() {
        const arr = this.state.artData;
        // console.log(arr);
        return (
            <div className='art-container'>
                {
                    arr.map(entry => {
                        return <Piece key={entry.id} {...entry}/>
                    })
                }
            </div>
        )
    }
}
