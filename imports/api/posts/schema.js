import SimpleSchema from 'simpl-schema'
const PostsSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Title:",
        max:50,
    },
    description: {
        type: String,
        label: "Description:",
        max:50
    },
    createdAt: {
        type: Date,
    },
    userId : {
        type: String
    }
});
export default PostsSchema;