import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import { Route, Switch, Redirect } from 'react-router-dom'
import NotFoundPage from './NotFoundPage';
import MangeCoursePage from './MangeCoursePage';


function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/course/:slug" component={MangeCoursePage} />
                <Route path="/course/" component={MangeCoursePage} />
                <Redirect from="/about-page" to="about"></Redirect>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    )
}

export default App;
