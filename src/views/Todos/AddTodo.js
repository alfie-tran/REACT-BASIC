import React from 'react';
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
	state = {
		title: '',
	};
	handleOnChangeTitle = (event) => {
		this.setState({
			title: event.target.value,
		});
	};
	handleAddTodo = () => {
		// alert('click me');
		if (!this.state.title) {
			//if(undefined/null/empty) ==> false. Ta them dau ! de phu dinh menh de ==> true
			toast.error(`Missing title's Todo!`);
			return;
		}

		let todo = {
			id: Math.floor(Math.random() * 1001),
			title: this.state.title,
		};
		this.props.addNewTodo(todo); //goi nguoc len thang cha de them todo
		this.setState({
			title: '',
		});
	};
	render() {
		let { title } = this.state;
		return (
			<div className="add-todo">
				<input type="text" value={title} onChange={(event) => this.handleOnChangeTitle(event)} />
				<button type="button" className="add" onClick={() => this.handleAddTodo()}>
					Add
				</button>
			</div>
		);
	}
}

export default AddTodo;
