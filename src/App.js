import React from 'react';
import Home from "./components/Home";
import {Route, Switch} from "react-router-dom";
import Login from "./containers/LoginContainer";
import Profile from "./containers/ProfileContainer";
import Register from "./containers/RegisterContainer";
import {changePasswordPage, editPage, homePage, loginPage, profilePage, registerPage} from "./utils/constants";
import EditUser from "./containers/EditUserContainer";
import ChangePassword from "./containers/ChangePasswordContainer";
import ErrorPage from "./components/ErrorPage";

const App = () => {
    return (
        <Switch>
            <Route path={['/', `/${homePage}`]} exact component={Home}/>
            <Route path={`/${registerPage}`} exact component={Register}/>
            <Route path={`/${loginPage}`} exact component={Login}/>
            <Route path={`/${profilePage}`} exact component={Profile}/>
            <Route path={`/${editPage}`} exact component={EditUser}/>
            <Route path={`/${changePasswordPage}`} exact component={ChangePassword}/>
            <Route component={ErrorPage}/>
        </Switch>
    );
};

export default App;