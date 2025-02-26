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

    return (<div>
        <h2>Lista Post</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Titolo</th>
              <th>Contenuto</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.titolo}</td>
                <td>{post.contenuto}</td>
                <td>{post.tags.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>  );
};

export default PostList;