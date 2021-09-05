// Packages
import { Component } from 'react';

// Utils
import { loadPosts } from '../../utils/load-posts'

// Styles
import './styles.css';
import { Posts } from '../../components/Posts';

class Home extends Component {
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
export default Home;
