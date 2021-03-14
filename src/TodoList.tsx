import React from 'react';
import { TodoListItem } from './TodoListItem';

type Todo = {
	text: string;
	complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;

interface TodoListProps {
	todos: Array<Todo>;
	toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
	return (
		<ul>
			{todos.map((todo) => {
				return (
					<TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
				);
			})}
		</ul>
	);
};
