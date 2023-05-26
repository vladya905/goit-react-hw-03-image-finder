import React from 'react';
import { ThreeDots  } from "react-loader-spinner";
import s from './Loader.module.css';

export const MyLoader = () => {
    return (
        <div className={s.Loader}>
            Loading
            <ThreeDots  type="ThreeDots" color="#00BFFF" height={80} width={80} />
        </div>
    );

};