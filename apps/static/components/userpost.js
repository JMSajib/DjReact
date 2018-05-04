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
    });
  }

  render() {
    return (
      <div class="container">
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Enter Name</label>
        <input id="name" name="name" type="text" />

        <label htmlFor="varsity">Enter your Varsity</label>
        <input id="varsity" name="varsity" type="text" />

        <button>Send data</button>
      </form>
      </div>
    );
  }
}

export default UserForm;
