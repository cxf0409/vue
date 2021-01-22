import RouterDemo from "./components/RouterDemo";
import RouterChildrenDemo from "./components/RouterChildrenDemo";
import Index from "./components/Index";
import ZhangSanIndex from "./components/ZhangSanIndex";
import LiSiIndex from "./components/LiSiIndex"
import Pepole from "./components/Pepole";
import ShoppingCar from "./components/ShoppingCar"


const routes = [
    { path: "/", component: RouterDemo, name: "0" },
    { path: "/foo", component: RouterDemo, name: "1" },
    { path: "/bar", component: RouterDemo, name: "2" },
    { path: "/index", component: Index, name: "9" },
    { path: "/ZhangSanIndex", component: ZhangSanIndex, name: "9" },
    { path: "/LiSiIndex", component: LiSiIndex, name: "9" },
    { path: "/Pepole/:name", component: Pepole, props:true},
    { path: "/Shopping", component: ShoppingCar},
    {
        path: "/user/:id",
        component: RouterDemo,
        name: "3",
        props: true,
        children: [
            {
                path: "profile",
                component: RouterChildrenDemo,
                name: "3-1"
            },
            {
                path: "posts",
                component: RouterChildrenDemo,
                name: "3-2"
            }
        ]
    },
    { path: "/a", redirect: "/bar" },
    { path: "*", component: RouterDemo, name: "404" }
];

export default routes;
