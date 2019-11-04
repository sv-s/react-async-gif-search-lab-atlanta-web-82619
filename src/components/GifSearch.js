import React from 'react';

class GifSearch extends React.Component {
    state = {
        input: ''
    }

    handleChange = (event) => {
        event.persist();
        
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.submitGifSearch(this.state.input);
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.input} onChange={this.handleChange}></input>
        </form>)
    }
}   

export default GifSearch;