import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageURL, newsURL, author, date,source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageURL ? "https://content.fortune.com/wp-content/uploads/2022/05/ethereum_54.jpg?resize=1200,600" : imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {source}
                        </span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem