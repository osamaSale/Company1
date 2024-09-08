import React, { useState, useEffect } from 'react';
import { ArchiveIcon, ArrowRightIcon } from '@primer/octicons-react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const Article = () => {
    let { id } = useParams();
    const [article, setarticle] = useState('');

    useEffect(() => {
        getAllArticleById(id)
        console.log(id);
    }, []);

    const getAllArticleById = (id) => {
        axios.post('http://127.0.0.1:5000/article', { id })
            .then((res) => {
                setarticle(res.data)
                console.log(res.data);
            })
    }

    const content = (
        <div className="container">
            { article &&
                <div className="col-md-12" >
                    <div className="card" style={{ width: '18rem' }} >
                        <div className="card-body">
                            <p>{article[0].title}</p>
                            <h6 className="card-subtitle mb-2 text-muted">{article[0].author}</h6>
                            <p className="card-text">{article[0].description}</p>

                        </div>
                    </div>
                </div>



            }
            <div className="navbar-nav ml-auto">
                <Link to="/home">Home<ArrowRightIcon size={16} /></Link>
            </div>
        </div>

    )

    return content;

}

export default Article