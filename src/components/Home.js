import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Medicineball from '../medicineball.png'

class Home extends Component {

    state = {
        posts: []
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            resp => {
                console.log(resp)
                this.setState({
                    posts: resp.data.slice(0, 10)
                })
            }
        )
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Medicineball} alt="medicine ball" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title">
                                    {post.title}
                                </span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No posts yet</div>
            )
        return (
            <div className="container home">
                <h1 className="center">Home</h1>
                {postList}

            </div>
        )
    }
}

export default Home;
