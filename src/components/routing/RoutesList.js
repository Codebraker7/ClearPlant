import React from 'react';
import About from '../about/About';
import Mission from '../mission/Mission';
import Work from '../work/Work';
import NotFound from '../layout/NotFound';
import { Route, Routes } from 'react-router-dom';

const RoutesList = () => {
    return (
        <Routes>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/mission' element={<Mission />} />
            <Route exact path='/work' element={<Work />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default RoutesList;