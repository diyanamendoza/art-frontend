import React, { Component } from 'react'
import { createPiece, getCategories } from './fetch-utils.js'

export default class Create extends Component {
    state = {
        title: '',
        artist: '',
        img: '',
        category: '',
        century: '',
        allCategories: []
    }

    componentDidMount = async () => {
        const allCategories = await getCategories()
        this.setState({allCategories});
    }

    handleSubmit = async e => {
        e.preventDefault();
        let newPiece = {
            title: this.state.title,
            artist: this.state.artist,
            img: this.state.img,
            category_id: this.state.category,
            century: this.state.century,
        }
        await createPiece(newPiece);
        this.props.history.push('/')
    }

    titleChange = e => this.setState({ title: e.target.value })
    artistChange = e => this.setState({ artist: e.target.value })
    // imgChange = e => this.setState({ img: e.target.value })
    categoryChange = e => this.setState({ category: e.target.value })
    centuryChange = e => this.setState({ century: e.target.value })

    handleUpload = () => {
        let options = {
            cloud_name: 'dmp-cloud', 
            upload_preset: 'dmp-preset',
            multiple: false,
            resource_type: 'image'
          };
      
          window.cloudinary.openUploadWidget(options, (error, result) => { 
            console.log(result);
            if (error) {
              console.error(error);
              return;
            }
            
            const image = result[0];
            this.setState({ img: image.url }); 
          });
    }

    render() {
        return (
            <form className='post-form' onSubmit={this.handleSubmit}>
                <h3>Add an artwork to the gallery</h3>
                <label>Title <input onChange={this.titleChange} /></label>
                <label>Artist <input onChange={this.artistChange} /></label>
                <label>Image
                            <button type='button' className='img-button' onClick={this.handleUpload}>Upload via File/URL</button>
                        </label>
                <label>Category <select onChange={this.categoryChange}>
                    {this.state.allCategories.map(category => 
                        <option
                        key={category.category}
                        value={category.id}
                        >{category.category}</option>)}
                    </select></label>
                <label>Century <input onChange={this.centuryChange} /></label>
                <button>Submit</button>
            </form>
        )
    }
}
