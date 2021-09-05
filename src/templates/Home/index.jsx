// Packages
import { Component } from 'react';

// Utils
import { loadPosts } from '../../utils/load-posts'

// Components
import { Button } from '../../components/Button'

// Styles
import './styles.css';
import { Posts } from '../../components/Posts';

class Home extends Component {
  state = { 
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
  };
 
  async componentDidMount() {
    const { posts, postsPerPage } = this.state

    const postsAndPhotos = await loadPosts()

    this.setState({ 
      posts: postsAndPhotos.slice(posts, postsPerPage),
      allPosts: postsAndPhotos

    })
  }

  loadMorePosts = () => {
    console.log('Load')
  }

  render() {
    const { posts } = this.state;

    return (
    <section className="container">
      <Posts posts={ posts }/>
      <Button text="Load more posts" onClick={this.loadMorePosts}/>
    </section>
    );
  }
}
export default Home;
