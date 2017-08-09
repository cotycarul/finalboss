import {Meteor} from 'meteor/meteor'
import Posts from '/imports/api/posts/collection.js'

Meteor.methods({
    'post.create': function (data) {
        Posts.insert({
            title: data.title,
            description: data.description,
            createdAt: new Date(),
            userId: data.userId
        })
    },
    'post.get': function (_id) {
        return Posts.find({_id: _id}).fetch();
    },
    'post.edit': function (data) {
        if (Meteor.call('post.get').userId === data.userId) {
            meteor.update({_id: data.postId}, {
                title: data.title,
                description: data.description,
                createdAt: new Date()
            })
        }
        else throw new Meteor.Error('ID not match', "You are not allowed to edit this post");
    },
    'post.remove': function (_id, userId) {
        let post_id = Meteor.call('post.get').userId;
        if (post_id === userId) {
            Posts.remove({_id: _id})
        }
        else throw new Meteor.Error('ID not match', "You are not allowed to  this post");

    }
});