import { HeaderOnly } from '~/layout';
import Following from "~/pages/Following";
import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import Search from '~/pages/Search';
import Upload from "~/pages/Upload";
import routesConfig from '~/config/routes'
import Live from '~/pages/Live';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.live, component: Live },
    // @:nickname dung de huong de trang Profile
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }