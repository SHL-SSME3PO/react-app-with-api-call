import React, { Component } from 'react';
import Postform from './Postform';
import { connect} from  'react-redux';
import { fetchPosts} from '../actions/postactions'

class Posts extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	componentWillReceiveProps (nextProps) {
		if(nextProps.newPost) {
			console.log(nextProps.newPost);
			this.props.posts.unshift(nextProps.newPost);
		}
	}
	render () {
		console.log(this.props);
		const postItems = this.props.posts.map(post =>(
			<div key={post.id + Math.random() * 0.6}>
				<h3>{ post.title }</h3>
				<p>{ post.body }</p>
			</div>
		));
		return (
			<div>
				<h1>Posts</h1>
				{postItems}
			</div>
		)
	}
}
const mapStateToProps = state => ({
	posts : state.posts.items,
	newPost : state.posts.item
})
export default connect (mapStateToProps, {fetchPosts})(Posts);