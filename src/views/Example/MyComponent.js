import React from 'react';

class MyComponent extends React.Component {
	state = {
		name: 'Alfie',
		channel: 'Hoi dan IT',
	};
	//console.log(event.target.value, 'event target: ', event.target, 'event object: ', event);

	handleOnChangeName = event => {
		//this.state.name = event.target.name; //bad code
		// Tự động merge
		this.setState({
			name: event.target.value,
		});
	};
	handleClickButton = () => {
		alert('click me');
	};
	render() {
		console.log('>> call render: ', this.state);
		return (
			<>
				<div className="first">
					<input type="text" value={this.state.name} onChange={event => this.handleOnChangeName(event)} />
					Hello my component. My name is {this.state.name}
				</div>
				<div className="second">My youtube channel: {this.state.channel}</div>
				<div className="third">
					<button onClick={() => this.handleClickButton()}>Click me</button>
				</div>
			</>
		);
	}
}
export default MyComponent;
