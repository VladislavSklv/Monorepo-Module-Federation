import { Outlet } from 'react-router-dom';

export const App: React.FC = () => {
 

    return (
        <div>
            <h1>Shop module</h1>
            <Outlet/>
        </div>
    );
};
