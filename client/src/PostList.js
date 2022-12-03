import React, {useState, useEffect} from 'react';
import Post from './Post';

export default (props) => {
    const posts = props.posts || {};

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <Post 
                post={post}
            />
        )
    });

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
        </div>
    );
};