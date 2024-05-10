import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts, getPostsStatus, selectAllPosts } from './mypostsSlice';

const List = () => {
    const dispatch = useDispatch();
    const postStatus = useSelector(getPostsStatus);
    const posts = useSelector(selectAllPosts);
    const [loading, setLoading] = useState(false);

    const handleFetchPosts = () => {
        setLoading(true);
        dispatch(fetchAllPosts())
            .then(() => {
                setLoading(false);
                console.log("Posts fetched successfully");
            })
            .catch(() => {
                setLoading(false);
                console.log("Error fetching posts");
            });
    };

    if (loading || postStatus === 'loading') {
        console.log("Loading...");
    }

    if (postStatus === 'succeeded') {
        console.log("My Posts:", posts);
    }

    if (postStatus === 'failed') {
        console.log("Error fetching data");
    }

    return (
        <div>
            <button onClick={handleFetchPosts} disabled={loading || postStatus === 'loading'}>
                Fetch Posts
            </button>
            
            {postStatus === 'succeeded' && (
                <div>
                    <p>My Posts:</p>
                    {posts.map(post => {
                        console.log("Post:", post);
                        return (
                            <div key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                        );
                    })}
                </div>
            )}

            {postStatus === 'failed' && <p>Error fetching data</p>}
        </div>
    );
};

export default List;
