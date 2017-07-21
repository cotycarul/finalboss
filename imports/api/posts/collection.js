import { Mongo } from 'meteor/mongo';
import SchemaPosts from '/imports/api/posts/schema.js'

const Posts = new Mongo.Collection('posts');
Posts.attachSchema(SchemaPosts);


export default Posts;