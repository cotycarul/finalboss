/**
 * Created by Sandu Costin on 17-Jul-17.
 */
import route from './router.js'
import Home from '/imports/ui/pages/home/Home.jsx'
import Login from '/imports/ui/pages/user/Login.jsx'
import Register from '/imports/ui/pages/user/Register.jsx'
import PostList from '/imports/ui/pages/post/PostList.jsx'
import PostCreate from '/imports/ui/pages/post/PostCreate.jsx'
import PostShow from '/imports/ui/pages/post/PostShow.jsx'
import PostEdit from '/imports/ui/pages/post/PostEdit.jsx'

//ctrl + alt + l pt identare
route('/', Home);
route('/login', Login);
route('/register', Register);
route('/post/list', PostList);
route('/post/create', PostCreate);
route('/post/index', PostShow);
route('/post/edit', PostEdit);

