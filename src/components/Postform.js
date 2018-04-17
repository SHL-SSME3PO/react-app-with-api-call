import React,{Component} from 'react';
import { connect} from 'react-redux';
import { createPost } from '../actions/postactions';

class PostForm extends Component {
	constructor (props) {
		super(props);
		this.state = {
			title : '',
			body : ''
		}
	}

	onChangeHandler = (e) => {
		const val = e.target.value;
		this.setState ({[e.target.name] : val}) 
	}

	submitHandler = (e) => {
		e.preventDefault();
		const post = {
			title : this.state.title,
			body : this.state.body
		}	
		this.props.createPost(post)
	}

	render () {
		return (
			<div>
				<h1>Add Post</h1>
				<form onSubmit = {e => this.submitHandler(e)}>
					<div>
						<label>Title</label><br />
						<input type="text" name="title" onChange= {(e) => this.onChangeHandler(e)} value = {this.state.title}/> 
					</div>
					<br />
					<div>
						<label>Body</label><br/>
						<textarea name="body" onChange= {(e) => this.onChangeHandler(e)} value = {this.state.body}></textarea> 
						<br />
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}
export default connect(null, { createPost })(PostForm);