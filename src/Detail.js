import React, { Component } from 'react'
import { getPiece, editPiece, getCategories, deletePiece } from './fetch-utils.js'


export default class Detail extends Component {
    state = {
        artToDetail: [],
        hideEditForm: true,
        categories: []
    }

    componentDidMount = async () => {
        const artToDetail = await getPiece(this.props.match.params.id)
        this.setState({artToDetail});
        const categories = await getCategories()
        this.setState({categories});
    }

    handleEditClick = () => {
        this.setState({hideEditForm: false});
    };

    handleDeleteClick = async e => {
        await deletePiece(this.props.match.params.id);
        this.props.history.push('/');
    };

    handleFormSubmit = async e => {
        e.preventDefault();

        const current = this.state.artToDetail;
        let pieceEdits = {
            title: this.state.titleEdit || current.title,
            artist: this.state.artistEdit || current.artist,
            img: this.state.imgEdit || current.img,
            category_id: this.state.categoryEdit || current.category_id,
            century: this.state.centuryEdit || current.century 
        }
        // console.log(pieceEdits);
        await editPiece(this.props.match.params.id, pieceEdits);
        this.props.history.push('/');
    }

    render() {
        const piece = this.state.artToDetail;
        const cats = this.state.categories;
        // console.log(cats);
        return (
            <div className='detail-container'>
                    <img className="img-detail" src={piece.img} alt={piece.piece_id} />
                    <h3>{piece.title}</h3>
                    <h4>Artist: {piece.artist}</h4>
                    <h4>Type: {piece.category}</h4>
                    <h4>{piece.century} Century</h4>

                    <div className="edit-delete-buttons">
                    <button onClick={this.handleEditClick}>Edit</button>
                    <button onClick={this.handleDeleteClick}>Delete</button>
                    </div>

                    <form onSubmit={this.handleFormSubmit} className='edit-form' style={this.state.hideEditForm ? {display: 'none'} : {}}>
                        <label>Title
                            <input 
                            defaultValue={piece.title} 
                            onChange={(e) => this.setState({ titleEdit: e.target.value})}
                            />
                        </label>
                        <label>Artist
                            <input 
                                defaultValue={piece.artist} 
                                onChange={(e) => this.setState({ artistEdit: e.target.value})}
                                />
                        </label>
                        <label>Image URL
                            <input 
                                defaultValue={piece.img} 
                                onChange={(e) => this.setState({ imgEdit: e.target.value})}
                                />
                        </label>
                        <label>Type
                            <select 
                                value={piece.category_id}
                                onChange={(e) => this.setState({ categoryEdit: e.target.value})}>
                                    {cats.map(category => 
                                        <option
                                        key={category.category}
                                        value={category.id}
                                        >{category.category}</option>)}
                            </select>
                        </label>
                        <label>Century
                            <input 
                                defaultValue={piece.century} 
                                onChange={(e) => this.setState({ centuryEdit: e.target.value})}
                                />
                        </label>
                        <button>Submit</button>
                    </form>
            </div>
        )
    }
}
