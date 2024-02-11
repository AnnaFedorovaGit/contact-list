import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from './redux/auth/operations';
import { selectAuthIsLoading } from './redux/auth/selectors';
import Loader from 'components/Loader/Loader';
import Layout from 'components/Layout/Layout';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactListPage = lazy(() => import('./pages/ContactListPage/ContactListPage'));


const App = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectAuthIsLoading);

	useEffect(() => {
		dispatch(refreshThunk());
	}, [dispatch])

	return (
		isLoading ? <Loader/> : (
			<Suspense fallback={<Loader/>}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='/register' element={<RestrictedRoute><RegisterPage/></RestrictedRoute>}/>
					<Route path='/login' element={<RestrictedRoute><LoginPage/></RestrictedRoute>}/>
					<Route path='/contacts' element={<PrivateRoute><ContactListPage /></PrivateRoute>} />
				</Route>
				<Route path='*' element={<h1>error</h1>} />
				{/* <Route path="*" element={<Navigate to="/" replace />} /> */}
			</Routes>
		</Suspense >
		)
	)
}


export default App;
