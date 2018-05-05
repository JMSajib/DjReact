import React, { Component } from 'react';

const REQ_URL= '/api/list/';

class UserForm extends Component  {

  constructor() {
  super();
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch(REQ_URL, {
      method: 'POST',
      body: data,
    })
    .then(response => {
      alert(response.statusText);
    });
    event.target.reset();
  }

  render() {
    return (
      <div class="container">
       <h2>Create Post</h2><hr/>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label htmlFor="name">Enter Name</label>
            <input id="name" class="form-control" name="name" type="text" />
          </div>
          <div class="form-group">
            <label htmlFor="varsity">Enter your Varsity</label>
            <input id="varsity" class="form-control" name="varsity" type="text" />
          </div>
          <button type="submit" class="btn btn-primary">Send Data</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
