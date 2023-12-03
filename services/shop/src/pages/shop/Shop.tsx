import React from 'react';
import {shopRoutes} from '@packages/shared/src/routes/shop';
import { Link } from 'react-router-dom';

const Shop:React.FC = () => {
    return (
        <div>
            Shop
            <br />
            <Link to={shopRoutes.secondary}>go to secondary page</Link>
        </div>
    );
};

export default Shop;