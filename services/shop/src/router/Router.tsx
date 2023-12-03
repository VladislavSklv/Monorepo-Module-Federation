import { App } from "@/components/App/App";
import { LazyShop } from "@/pages/shop/Shop.lazy";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import {UserCard} from '@packages/shared/src/components/UserCard';

const routes = [
    {
        path: '/shop',
        element: <App/>,
        children: [
            {
                path: '/shop/main',
                element: <Suspense fallback={'loading...'}><LazyShop/></Suspense>
            },
            {
                path: '/shop/secondary',
                element: 
                <Suspense fallback={'loading...'}>
                    <div style={{color: 'red'}}>
                        <h1>Secondary page</h1>
                        <UserCard username="Customer" />
                    </div>
                </Suspense>
            }
        ]
    }
]

export const router = createBrowserRouter(routes);

export default routes;