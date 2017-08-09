import { Meteor } from 'meteor/meteor';
import "/imports/startup/server/index";
import "/imports/api/user/methods.js"
import "/imports/api/posts/methods.js"
Meteor.startup(() => {
  // code to run on server at startup
});
