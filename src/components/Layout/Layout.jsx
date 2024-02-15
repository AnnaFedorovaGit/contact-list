// import { useDispatch, useSelector } from 'react-redux'
// import { setFilter } from '../../redux/filterSlice'
// import { selectFilter } from '../../redux/selectors'

import Navigation from "components/Navigation/Navigation";
// import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import css from './Layout.module.css'


const Layout = () => {

    return (
        // <Suspense fallback={<>is loading</>}>
        <div className={css.wrapper}>
            <header className={css.header}>
                <Navigation/>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
        /* </Suspense> */
    )
}


export default Layout