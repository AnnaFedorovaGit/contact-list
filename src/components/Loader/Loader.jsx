// import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

import css from './Loader.module.css';


const Loader = () => {

    return (
        <div className={css.wrapper}>
            <InfinitySpin
                visible={true}
                width="200"
                color="var(--primary-yellow-color)"
                ariaLabel="infinity-spin-loading"
            />
        </div>
    );
};


export default Loader;