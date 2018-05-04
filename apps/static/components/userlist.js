import React, { Component } from 'react';

const REQ_URL = 'http://127.0.0.1:8000/api/list/'

class UserList extends Component {
  constructor(props){
    super(props);
    this.state = {
      bookList: []
    };
  }

componentDidMount(){
    fetch(REQ_URL,{
        method:'GET'
    })
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        this.setState({
            bookList:data
        })
    })
}

  render() {
    return (
      <div class="container">
        <h2>User List</h2><hr/>
        {this.state.bookList.map(item => (
          <div key={item.id}>
            <ul>
              <li>{item.id}</li>
              <li>{item.name}</li>
              <li>{item.varsity}</li>
            </ul>
          </div>
          )
        )}
      </div>
    );
  }
}

export default UserList;
