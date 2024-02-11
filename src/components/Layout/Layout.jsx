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
        <>
            <header className={css.wrapper}>
                <Navigation/>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
        /* </Suspense> */
    )
}


export default Layout