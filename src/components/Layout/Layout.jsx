import { Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';

import css from './Layout.module.css';


const Layout = () => {
    return (
        <>
            <header className={css.header}>
                <UserMenu />
                <div className={css.backgroundImage}></div>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}


export default Layout;