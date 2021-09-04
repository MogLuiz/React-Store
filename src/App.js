// Packages
import { Component } from 'react';

// Utils
import { loadPosts } from './utils/load-posts'

// Components
import { PostCard } from './components/PostCard';

// Styles
import './App.css';
import { Posts } from './components/Posts';

class App extends Component {
  state = { 
    posts: []
  };
 
  async componentDidMount() {

    const postsAndPhotos = await loadPosts()

    this.setState({ posts: postsAndPhotos })
  }


  render() {
    const { posts } = this.state;

    return (
    <section className="container">
      <Posts posts={ posts }/>
    </section>
    );
  }
}
export default App;
