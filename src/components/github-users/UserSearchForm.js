import React from 'react';
import axios from 'axios';

class UserSearchForm extends React.Component {
  state = { userName: '' };
  handleSubmit = event => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data);
        this.setState({ userName: '' });
      });
  };
  render() {
    return (
      <form
        className="header input-group"
        onSubmit={this.handleSubmit}
        style={{
          width: '100%',
          paddingLeft: '8%',
          paddingRight: '8%',
          marginBottom: '2%'
        }}
      >
        <input
          type="text"
          className="form-control"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="Github username"
        />
        <div className="input-group-append" style={{ paddingLeft: '10px' }}>
          <button type="submit" className="btn btn-primary">
            Add card
          </button>
        </div>
      </form>
    );
  }
}

export default UserSearchForm;