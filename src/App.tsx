import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import homepage from './pages/homepage';
import enero from './pages/enero';
import febrero from './pages/febrero';
import marzo from './pages/marzo';
import abril from './pages/abril';
import mayo from './pages/mayo';
import junio from './pages/junio';
import julio from './pages/julio';
import agosto from './pages/agosto';
import septiembre from './pages/septiembre';
import octubre from './pages/octubre';
import noviembre from './pages/noviembre';
import diciembre from './pages/diciembre';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/fonts.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/homepage" component={homepage} exact={true} />
          <Route path="/enero" component={enero} exact={true} />
          <Route path="/febrero" component={febrero} exact={true} />
          <Route path="/abril" component={abril} exact={true} />
          <Route path="/marzo" component={marzo} exact={true} />
          <Route path="/mayo" component={mayo} exact={true} />
          <Route path="/junio" component={junio} exact={true} />
          <Route path="/julio" component={julio} exact={true} />
          <Route path="/agosto" component={agosto} exact={true} />
          <Route path="/septiembre" component={septiembre} exact={true} />
          <Route path="/octubre" component={octubre} exact={true} />
          <Route path="/noviembre" component={noviembre} exact={true} />
          <Route path="/diciembre" component={diciembre} exact={true} />
          <Route path="/" render={() => <Redirect to="/homepage" />} exact={true} />
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
