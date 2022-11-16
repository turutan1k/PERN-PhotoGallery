import Gallery from "./pages/Gallery"
import PhotoPage from "./components/PhotoPage"
import {
    ADMIN_ROUTE,
    SHOP_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    PHOTO_ROUTE,
} from "./utils/consts"
import Admin from "./pages/Admin"
import Auth from "./components/popups/Auth"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Gallery,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: PHOTO_ROUTE + "/:id",
        Component: PhotoPage,
    },
]
