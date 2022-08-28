import React  from "react";

const NewsItem = (props) => {

    
        let { title, description, imageUrl, newsUrl, author, date, source } = props
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{display: 'flex', justifyContent: 'flex-end', position : 'absolute', right: '0'}}>
                        <h5><span className="badge rounded-pill bg-danger">{source}</span></h5>
                    </div>
                    <img src={!imageUrl ? "https://images.news18.com/ibnlive/uploads/2022/08/untitled-design-2022-08-17t152712.513-166073775916x9.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"> <small className="text-muteed">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-info">Read More</a>
                    </div>
                </div>
            </div>
        );
    
}

export default NewsItem;
