import React, {useState, useEffect} from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
import axios from 'axios';

export default ({post}) => {
    const [comments, setComments] = useState([]);

    const fetchComments = async (postId) => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

        setComments(res.data);
    };

    useEffect(() => {
        fetchComments(post.id);
    }, []);

    return (
        <div 
            key={post.id}
            className="card" 
            style={{width: '30%', marginBottom: '20px'}}
        >
            <div className="card-body">
                <h3>{post.title}</h3>
                <CommentList comments={comments} />
                <CommentCreate postId={post.id} fetchComments={fetchComments} />
            </div>
        </div>
    )
};