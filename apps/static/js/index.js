import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, MemoryRouter } from 'react-router-dom';

import UserList from '../components/userlist';
import UserForm from '../components/userpost';

const App = () => {
    return(

      <BrowserRouter>
        <div>
          <Route exact path="/" component={ UserList }/><br/>
          <Route path="/create/" component={ UserForm }/><br/>
        </div>
      </BrowserRouter>

    )
}

ReactDOM.render(<App/>,document.getElementById('root'))
