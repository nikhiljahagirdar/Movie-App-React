import React, {Component} from 'react';
import AppRouter from './routes/AppRouter';

class App extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
         <AppRouter/>
         );
  }
}

export default App;