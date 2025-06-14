import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyForm extends React.Component {
	state = {
		arrJobs: [
			{ id: 'abcJob1', title: 'Developers', salary: '500' },
			{ id: 'abcJob2', title: 'Testers', salary: '400' },
			{ id: 'abcJob3', title: 'Project Managers', salary: '1000' },
		],
	};
	addNewJob = (job) => {
		console.log('check job from parent: ', job);
		this.setState({
			arrJobs: [...this.state.arrJobs, job],
		});
	};
	deleteAJob = (job) => {
		let currentJobs = this.state.arrJobs;
		currentJobs = currentJobs.filter((item) => item.id !== job.id); //lọc những thằng job khác vs id của thằng item
		this.setState({
			arrJobs: currentJobs,
		});
	};
	//hàm updating
	componentDidUpdate(prevProps, prevState) {
		console.log('>>> run did update:', 'prev state:', prevState, 'current update: ', this.state);
	}
	//hàm chạy các thành phần đã gắn kết
	componentDidMount() {
		console.log('>>> run component did mount');
	}

	render() {
		console.log('>>>call render: ', this.state);
		return (
			<>
				<AddComponent addNewJob={this.addNewJob} />

				<ChildComponent arrJobs={this.state.arrJobs} deleteAJob={this.deleteAJob} />
			</>
		);
	}
}
export default MyForm;
