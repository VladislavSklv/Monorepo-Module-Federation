import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {adminRoutes} from '@packages/shared/src/routes/admin'
import {shopRoutes} from '@packages/shared/src/routes/shop'

export const App: React.FC = () => {

    return (
        <div data-testid={'App'}>
            <h1>PAGE</h1>
            <Link to={adminRoutes.about}>About</Link>
            <Link to={shopRoutes.main}>Shop</Link>
            <Outlet/>
        </div>
    );
};
