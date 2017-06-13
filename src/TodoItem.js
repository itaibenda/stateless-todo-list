import React from 'react';
import {string} from 'prop-types';

const TodoItem = (props) => {
  return (
    <div>
      {props.todo}
    </div>
  );
};

TodoItem.propTypes = {
  todo: string
};

export default TodoItem;