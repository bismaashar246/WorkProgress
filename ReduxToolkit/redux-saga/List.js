import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPostsPending, fetchAllPostsFulfilled, fetchAllPostsRejected } from './mypostsSlice'; // Import specific action creators

const List = () => {
    const dispatch = useDispatch();
    
    const getPostsStatus = state => state.posts.status;
    const selectAllPosts = state => state.posts.posts;

    const postStatus = useSelector(getPostsStatus);
    const posts = useSelector(selectAllPosts);
    const [loading, setLoading] = useState(false);

    const handleFetchPosts = () => {
        setLoading(true);
        dispatch(fetchAllPostsPending());
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                return response.json();
            })
            .then(data => {
                dispatch(fetchAllPostsFulfilled(data));
                setLoading(false);
                console.log("Posts fetched successfully");
            })
            .catch(error => {
                dispatch(fetchAllPostsRejected(error.message));
                setLoading(false);
                console.log("Error fetching posts:", error.message);
            });
    };

    if (loading || postStatus === 'loading') {
        console.log("Loading...");
    }

    if (postStatus === 'succeeded') {
        console.log("My Posts:", posts);
    }

    if (postStatus === 'failed') {
        console.log("Error fetching data:", posts.error);
    }

    return (
        <div>
            <button onClick={handleFetchPosts} disabled={loading || postStatus === 'loading'}>
                Fetch Posts
            </button>
            
            {postStatus === 'succeeded' && (
                <div>
                    <p>My Posts:</p>
                    {posts.map(post => { // Access the posts array directly
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

            {postStatus === 'failed' && <p>Error fetching data: {posts.error}</p>}
        </div>
    );
};

export default List;
