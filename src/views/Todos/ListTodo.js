import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
	state = {
		listTodos: [
			{ id: 'todo1', title: 'Doing homework' },
			{ id: 'todo2', title: 'Making video' },
			{ id: 'todo3', title: 'Fixing bugs' },
		],
		editTodo: {},
	};
	addNewTodo = (todo) => {
		this.setState({
			listTodos: [...this.state.listTodos, todo],
		});
		toast.success('Wow so easy!');
	};

	handleDeleteTodo = (todo) => {
		let currentTodos = this.state.listTodos;
		currentTodos = currentTodos.filter((item) => item.id !== todo.id);
		this.setState({
			listTodos: currentTodos,
		});
		toast.success('Delete succeed!');
	};

	handleEditTodo = (todo) => {
		let { editTodo, listTodos } = this.state;
		let isEmptyObj = Object.keys(editTodo).length === 0;
		//save
		if (isEmptyObj === false && editTodo.id === todo.id) {
			let listTodosCopy = [...listTodos];

			let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

			listTodosCopy[objIndex].title = editTodo.title;

			this.setState({
				listTodos: listTodosCopy,
				editTodo: {},
			});
			toast.success('Update todo succeed!');
			return;
		}
		//edit
		this.setState({
			editTodo: todo,
		});
	};
	handleOnchangeEditTodo = (event) => {
		let editTodoCopy = { ...this.state.editTodo };
		editTodoCopy.title = event.target.value;
		this.setState({
			editTodo: editTodoCopy,
		});
	};
	render() {
		let { listTodos, editTodo } = this.state;
		//C2: let listTodos = this.state.listTodos;
		let isEmptyObj = Object.keys(editTodo).length === 0;
		console.log('>>check empty object: ', isEmptyObj);

		return (
			<>
				<p>Simple TODO Apps with React.js (Nhat Huy &amp; hoi dan IT)</p>
				<div className="list-todo-container">
					<AddTodo addNewTodo={this.addNewTodo} />

					<div className="list-todo-content">
						{/* bat buoc phai co dk listTodos.length > 0 moi dung duoc ham map */}
						{listTodos &&
							listTodos.length > 0 &&
							listTodos.map((item, index) => {
								return (
									<div className="todo-child" key={item.id}>
										{isEmptyObj === true ? (
											<span>
												{index + 1} - {item.title}
											</span>
										) : (
											<>
												{editTodo.id === item.id ? (
													<span>
														{index + 1} -{' '}
														<input value={editTodo.title} onChange={(event) => this.handleOnchangeEditTodo(event)} />
													</span>
												) : (
													<span>
														{index + 1} - {item.title}
													</span>
												)}
											</>
										)}
										<button className="edit" onClick={() => this.handleEditTodo(item)}>
											{/* tức là ko rỗng và editTodo.id = item.id*/}
											{isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
										</button>
										<button className="delete" onClick={() => this.handleDeleteTodo(item)}>
											Delete
										</button>
									</div>
								);
							})}
					</div>
				</div>
			</>
		);
	}
}
export default ListTodo;
