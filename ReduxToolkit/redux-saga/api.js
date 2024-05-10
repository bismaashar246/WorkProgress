import React from "react";


export const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log("Fetching data")
    if (!response.ok) {
        console.log('Failed to fetch posts');
    }
    return response.json();
};
