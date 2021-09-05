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
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state

    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage })
  }

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;

    const noMorePosts = page + postsPerPage >= allPosts.length

    return (
    <section className="container">
      <Posts 
        posts={ posts }
      />
      
      <div className="button-container">
        <Button 
          text="Load more posts" 
          onClick={this.loadMorePosts}
          disabled={noMorePosts}
        />
      </div>
    </section>
    );
  }
}
export default Home;
