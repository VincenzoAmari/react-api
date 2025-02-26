import { useState, useEffect } from "react";
import axios from "axios";


const API_URL = "http://localhost:3000/api/posts"; 


const PostList = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      axios.get(API_URL)
        .then((response) => setPosts(response.data))
        .catch((error) => console.error("Errore nel recupero dei post:", error));
    }, []);

    return (  );
};

export default PostList;