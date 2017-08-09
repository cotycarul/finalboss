import {Meteor} from 'meteor/meteor'
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import Posts from '/imports/api/posts/collection.js'

class Home extends React.Component {
    render() {
        const {loading, posts} = this.props;

        if (loading) {
            return <div>Waiting for the method</div>
        }

        return (
            <div>
                <div className="text-center"><h1>Posts</h1></div>
                {
                    posts.map(post => {
                        return (
                            <div key={post._id}>
                                <div className="panel panel-default ">

                                    <div className="panel-heading "><h3>{post.title}</h3></div>
                                    <div className="panel-body">
                                        <h5>{post.description}</h5>
                                        <h5>userId: {post.userId}</h5>
                                        <h5>postId: {post._id}</h5>
                                    </div>
                                    <div className="panel-body text-right ">
                                        <button
                                            className="btn btn-default btn-sm disabled">{post.createdAt.getDay()}/{post.createdAt.getMonth()}/{post.createdAt.getFullYear()}
                                            <p></p>
                                            {post.createdAt.getHours()}:{post.createdAt.getSeconds()} </button>
                                    </div>
                                </div>
                            </div>


                        )
                    })
                }
            </div>
        )
    }
}

/*<div key={post._id} className="list-group">
    <button type="button" className="list-group-item">
        <h3>{post.title}</h3>
        {post.description}
    </button>*/
export default createContainer((props) => {
    const handle = Meteor.subscribe('showPosts');
    // reactive data sources will get tracked here
    // any change will result into a re-render of "Home" component

    return {
        loading: !handle.ready(),
        posts: Posts.find().fetch()
    }
}, Home)