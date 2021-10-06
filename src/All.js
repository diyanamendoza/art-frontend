import React, { Component } from 'react'
import Piece from './Piece.js';
import { getArtworks, getCategories } from './fetch-utils.js';
import Dropdown from './Dropdown.js';

export default class All extends Component {
    state = {
        artData: [],
        allCategories: [],
        filterCat: ''
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
        const allCategories = await getCategories()
        this.setState({allCategories});
    }

    handleCatSelect = async (e) => {
        await this.setState({filterCat: e.target.value});
        // console.log(this.state.filterCat);
    }

    render() {
        const arr = this.state.artData;
        // console.log(arr);
        return (
            <div className='all-page'>
                <Dropdown 
                handleChange={this.handleCatSelect}
                options={this.state.allCategories}
                />
                <div className='art-container'>
                    {
                    arr
                        .filter(entry => (entry.category_id === Number(this.state.filterCat)) || !this.state.filterCat)
                        .map(entry => {
                        return <Piece key={entry.piece_id} {...entry}/>
                        })
                    }
                </div>
            </div>
        )
    }
}
