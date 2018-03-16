import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from '../../../axios';
import Post from '../../../components/Post';

import './Posts.css';

export class Posts extends Component {
    state = {
        posts: [],
    };

    postSelectedhandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    componentDidMount() {
        axios.get('/posts')
            .then(({ data }) => {
                const posts = data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });

                this.setState({
                    posts: updatedPosts
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (<Link key={post.id} to={'/' + post.id}>
                    <Post

                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedhandler(post.id)} />
                </Link>);
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}