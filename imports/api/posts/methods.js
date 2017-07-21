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
     }
})