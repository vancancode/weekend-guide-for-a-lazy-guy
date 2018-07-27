import React from 'react';
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import axios from 'axios';

const Card = props => {
  return (
    <div
      className="table"
      style={{ width: '100%', paddingLeft: '8%', paddingRight: '8%' }}
    >
      <div className="card flex-row flex-wrap">
        <img
          style={{
            maxWidth: '100%',
            width: '25%',
            height: '25%'
          }}
          src={props.avatar_url}
          alt=""
        />
        <div className="card-block">
          <h4 className="card-title">{props.name}</h4>
          <pre className="card-text">{props.company}</pre>
        </div>
      </div>
    </div>
  );
};

const CardList = props => {
  return <div>{props.cards.map(card => <Card key={card.id} {...card} />)}</div>;
};

class Form extends React.Component {
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

class App extends React.Component {
  state = {
    // cards: [
    // 	{name:"Vanchan",
    // 	avatar_url:"https://avatars0.githubusercontent.com/u/32509480?v:4",
    // 	company:"Accenture"},
    // 	{name:"Vanchan",
    // 	avatar_url:"https://avatars0.githubusercontent.com/u/32509480?v:4",
    // 	company:"Accenture"},
    // 	{name:"Kanayama",
    // 	avatar_url:"https://avatars0.githubusercontent.com/u/31238942?v=4",
    // 	company:"Accenture"}
    // ]
    cards: []
  };

  addNewCard = cardInfo => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

// ReactDOM.render(<App />, mountNode)

export default App;
