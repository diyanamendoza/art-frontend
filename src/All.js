import React, { Component } from 'react'
import Piece from './Piece.js';
import { getArtworks } from './fetch-utils.js';

export default class All extends Component {
    state = {
        artData: []
    }

//PRE-refactoring:
    // fetchSearch = async () => {
    //     try {
    //         // OLD GET: const response = await request.get('https://polar-temple-01678.herokuapp.com/art');
    //         const response = await request.get('https://stormy-thicket-09908.herokuapp.com/artworks');
    //         this.setState({
    //             artData: response.body,
    //         });
    //     } catch(e) {
    //         console.log(e.message);
    //     }
    // }

    componentDidMount = async () => {
        const artData = await getArtworks();
        this.setState({artData})
    }

    render() {
        const arr = this.state.artData;
        // console.log(arr);
        return (
            <div className='art-container'>
                {
                    arr.map(entry => {
                        return <Piece key={entry.piece_id} {...entry}/>
                    })
                }
            </div>
        )
    }
}
