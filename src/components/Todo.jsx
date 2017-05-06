import React from 'react';

export default function Todo({ text }) {
  return (
    <div className="list-element todo">{text}</div>
  );
}

Todo.propTypes = {
  text: React.PropTypes.string,
};

Todo.defaultProps = {
  text: '',
};
