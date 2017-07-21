import SimpleSchema from 'simpl-schema';

const SchemaPosts = new SimpleSchema ({
    title:{
        type: String,
        min: 0
    },
    description:{
        type: String
    },
    createdAt:{
        type: Date
    },
    userId:{
        type: String
    }
});

export default SchemaPosts