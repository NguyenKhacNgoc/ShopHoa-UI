import Home from "../pages/Home"
import Products from "../pages/Products"
import HeaderOnly from "../components/Layouts/HeaderOnly"
import Upload from "../pages/Upload"
import Carts from "../pages/Carts"
import ProductDetail from "../pages/ProductDetail"
import searchresults from "../pages/SearchResults"
// Public Routes
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/product/:category', component: Products},
    { path: '/upload', component: Upload, layout:HeaderOnly},
    { path: '/productdetail/:productID', component: ProductDetail},
    { path: '/carts', component: Carts},
    { path: '/searchresults/:inputSearch', component: searchresults}
    
]
const privateRoutes = [
]
export {publicRoutes, privateRoutes}