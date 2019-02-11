import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import WizardOne from './components/wizards/Step1';
import WizardTwo from './components/wizards/Step2';
import WizardThree from './components/wizards/Step3';

export default <Switch>
    <Route exact path='/' render={() => <Dashboard />} />
    <Route path='/wizard/step1' component={WizardOne} />
    <Route path='/wizard/step2'component={WizardTwo} />
    <Route path='/wizard/step3' component={WizardThree} />
</Switch>