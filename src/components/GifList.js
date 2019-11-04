import React from 'react';

class GifList extends React.Component {
    render() {
        // debugger;
        return (<ul>
            {this.props.gifs.map(gif => {
                return (<li>
                    <img src={gif.images.original.url} ></img>
                </li>)
            })}
        </ul>)
    }
}

export default GifList;