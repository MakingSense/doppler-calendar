import React, {Component} from 'react';
import { 
    IonButtons,
    IonBackButton,
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonTitle,
} from '@ionic/react';

import Accordion from '../components/accordion';
import { arrowBack } from 'ionicons/icons';
import './months.css';

class febrero extends Component {
render() {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="" icon={arrowBack}/>
                    </IonButtons>
                    <IonTitle>Febrero</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonPage>
    );
}
}
export default febrero;