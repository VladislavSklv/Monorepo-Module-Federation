import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {UserCard} from '@packages/shared/src/components/UserCard';

export const App: React.FC = () => {
 

    return (
        <div>
            <h1>Admin module</h1>
            <UserCard username='Admin'/>
            <Outlet/>
        </div>
    );
};
