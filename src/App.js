// Packages
import { Component } from 'react';

// Utils
import { loadPosts } from './utils/load-posts'

// Components
import { PostCard } from './components/PostCard';

// Styles
import './App.css';

class App extends Component {
  state = { 
    posts: []
  };
 
  componentDidMount() {
    this.loadPosts()
  }

  loadPosts = async () => {
    
    const postsAndPhotos = await loadPosts()

    this.setState({ posts: postsAndPhotos })
  }


  render() {
    const { posts } = this.state;

    return (
    <section className="container">
       <div className="posts">
        {posts.map(post => (
         <PostCard key={post.id} post={post}/>
        ))}
      </div>
    </section>
    );
  }
}
export default App;
