/**
 * Created by Sandu Costin on 17-Jul-17.
 */
import route from './router.js'
import Home from '/imports/ui/pages/home/Home.jsx'
import Login from '/imports/ui/pages/user/Login.jsx'
import Register from '/imports/ui/pages/user/Register.jsx'
import List from '/imports/ui/pages/post/List.jsx'


route('/', Home);
route('/login',Login);
route('/register', Register);
route('/post/list',List);