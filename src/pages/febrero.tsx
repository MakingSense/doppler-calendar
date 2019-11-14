import React from 'react';

import { 
    IonButtons,
    IonBackButton,
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonTitle,
} from '@ionic/react';

import { arrowBack } from 'ionicons/icons';
import './months.css';
import EventList from '../components/EventList';

const febrero : React.FC = () => {
 
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
            <IonContent className="ion-padding month--content">
                <EventList mes="1"/>
            </IonContent>
        </IonPage>
    );

}
export default febrero;