import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

const GIPHY_URL_HEAD = 'https://api.giphy.com/v1/gifs/search?q=';
const GIPHY_URL_TAIL = '&api_key=dc6zaTOxFJmzC&rating=g';

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    submitGifSearch = (url = 'lol') => {
        fetch(`${GIPHY_URL_HEAD}${url}${GIPHY_URL_TAIL}`)
            .then(r => r.json())
            .then(j => {
                this.setState({
                    gifs: j.data.slice(0,3)
                })
            });
    }

    componentDidMount() {
        this.submitGifSearch();
    }

    render() {
        return ( <div>
            < GifSearch submitGifSearch={this.submitGifSearch} />
            < GifList gifs={this.state.gifs} />
        </div>)
    }
}

export default GifListContainer;