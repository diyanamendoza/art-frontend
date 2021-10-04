import React, { Component } from 'react'
import request from 'superagent'


export default class Detail extends Component {
    state = {
        artToDetail: [],
    }

    componentDidMount = async () => {
        try {
            // OLD GET: const response = await request.get(`https://polar-temple-01678.herokuapp.com/art/${this.props.match.params.id}`);
            const response = await request.get(`https://stormy-thicket-09908.herokuapp.com/artworks/${this.props.match.params.id}`);
            this.setState({
                artToDetail: response.body
            });
        } catch(e) {
            console.log(e.message);
        }
    }

    render() {
        const piece = this.state.artToDetail;
        console.log(piece);
        return (
            <div className='detail-container'>
                    <img className="img-detail" src={piece.img} alt={piece.piece_id} />
                    <h3>{piece.title}</h3>
                    <h4>Artist: {piece.artist}</h4>
                    <h4>Type: {piece.category}</h4>
                    <h4>{piece.century} Century</h4>
            </div>
        )
    }
}
