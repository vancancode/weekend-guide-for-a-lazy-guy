import React from 'react';

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
            height: '25%',
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

export default Card;