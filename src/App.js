import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Article from './components/Article';
import Title from './components/Title';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/Title" component={Title}/>
              <Route path="/" component={Article}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;


// import React, { Component } from 'react';
// import Article from './components/Article';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Article />
//       </div>
//     );
//   }
// }

// export default App;
