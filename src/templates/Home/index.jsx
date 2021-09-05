// Packages
import { Component } from 'react';

// Utils
import { loadPosts } from '../../utils/load-posts'

// Components
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput';

// Styles
import './styles.css';
import { Posts } from '../../components/Posts';

class Home extends Component {
  state = { 
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: ''
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

  handleChange = (e) => {
    const { value } = e.target

    this.setState({ searchValue: value })
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;

    const noMorePosts = page + postsPerPage >= allPosts.length


    const filteredPosts = !!searchValue ? 
          allPosts.filter(post => {
            return post.title.toLowerCase().includes(searchValue.toLowerCase())
          })
          : posts
          

    return (
    <section className="container">

      <TextInput 
        handleChange={this.handleChange} 
        searchValue={searchValue}
      />

     <br /> <br /> <br />

      {filteredPosts.length > 0 && (
        <Posts 
          posts={ filteredPosts }
        />
      )}

      {filteredPosts.length === 0 && (
        <h3>Não existem posts para essa busca :(</h3>
      )}
      
      <div className="button-container">
        {!searchValue && (
          <Button 
          text="Load more posts" 
          onClick={this.loadMorePosts}
          disabled={noMorePosts}
        />
        )}
      </div>
    </section>
    );
  }
}
export default Home;
