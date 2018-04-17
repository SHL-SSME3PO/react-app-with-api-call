import React, { Component } from 'react';
import Posts from './Posts';
import PostForm from './Postform';

class PostListContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			title : '',
			body : ''
		}
  }
  	addedItem( {title, body} ) {
    	this.setState({title : title});
    	this.setState({body : body});
	}
	

	render () {
		return (
			<div>
				<PostForm updateItem = {this.state.addedItem} />
				<Posts updateItem = {this.state.addedItem} />
			</div>
		)
	}
}
export default PostListContainer;