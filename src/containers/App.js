import React, { useEffect }  from 'react';
import { connect } from "react-redux";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { requestRobots } from '../actions';

function App(props) {
  const { 
    robots,
    handleRequestRobots,
    searchTerm,
  } = props;

  useEffect(handleRequestRobots, []);
  
  const filteredRobots = robots.filter(robot => {
    return robot.username.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <div className='tc'>
      <h1 className='f1'>RoboPals</h1>
      {
        robots.length === 0 ? 
          <h2>loading...</h2> : (
          <>
            <SearchBox />
            <Scroll>
              <ErrorBoundary>
                <CardList robots={filteredRobots} />
              </ErrorBoundary>
            </Scroll>
          </>
        )
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    robots: state.requestRobots.robots,
    searchTerm: state.searchRobots.searchTerm,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleRequestRobots: () => {
      dispatch(requestRobots);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);