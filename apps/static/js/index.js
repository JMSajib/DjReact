import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, MemoryRouter, Link } from 'react-router-dom';

import UserList from '../components/userlist';
import UserForm from '../components/userpost';

const App = () => {
    return(

      <BrowserRouter>
        <div class="container">
          <Route exact path="/" component={ UserList }/><br/>
          <Route exact path="/create" component={ UserForm }/><br/>
            <header>
              <Link to="/create">Create Post</Link><br/>
            </header>
        </div>
      </BrowserRouter>

    )
}

ReactDOM.render(<App/>,document.getElementById('root'))
