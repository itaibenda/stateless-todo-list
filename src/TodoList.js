import React from 'react';
import {array} from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({todoList}) => {
  return (
    <div>
      {todoList.map((item, index) => <TodoItem key={index} todo={item}/>)}
    </div>
  );
};

TodoList.propTypes = {
  todoList: array
};

export default TodoList;