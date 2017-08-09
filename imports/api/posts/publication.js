import {Meteor} from 'meteor/meteor'
import Posts from '/imports/api/posts/collection.js'
Meteor.publish('showPosts', function() {
    return Posts.find({}, {
        sort: {createdAt: -1}
    })
});