import {Meteor} from 'meteor/meteor'
Meteor.methods({
    'user.register': function(data){
        Accounts.createUser({email: data.email, password: data.password})
    },

});