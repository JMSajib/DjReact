import React from 'react';
import ReactDOM from 'react-dom';

import UserList from '../components/userlist';
import UserForm from '../components/userpost';

const App = () => {
    return(

        <div>
          <UserList/><br/>
          <UserForm/><br/>
        </div>

    )
}

ReactDOM.render(<App/>,document.getElementById('root'))
