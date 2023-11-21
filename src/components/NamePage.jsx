import React from 'react';
import MainPageStyles from '../style/namePage.module.scss';
import blueLine from '../image/blueLine.svg'
const NamePage = () => {
    return (
        <>
            <div className={MainPageStyles.podcastList}>
                <h1>Подкасти</h1> <img src={blueLine} alt='blue Line' />
            </div>
        </>
    );
};

export default NamePage;