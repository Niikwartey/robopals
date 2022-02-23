import React, { Component }  from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

const ROBOTS_URL = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchTerm: '',
    }
  }

  componentDidMount() {
    fetch(ROBOTS_URL)
      .then(res => res.json())
      .then(robots => this.setState({ robots }));
  }

  handleSubmitSearch(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    console.log(`rendering App with ${this.state.robots.length} robots`);
    const { robots, searchTerm } = this.state;

    if (robots.length === 0) {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboPals</h1>
          <h2>loading...</h2>
        </div>
      );
    } else {
      const filteredRobots = robots.filter(robot => {
        return robot.username.toLowerCase().includes(searchTerm.toLowerCase());
      })
  
      return (
        <div className='tc'>
          <h1 className='f1'>RoboPals</h1>
          <SearchBox 
            searchTerm={searchTerm}
            handleSubmitSearch={this.handleSubmitSearch.bind(this)}
          />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
};

export default App;