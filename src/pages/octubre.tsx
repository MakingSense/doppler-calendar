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
import EventList from './EventList';

const octubre = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="" icon={arrowBack}/>
                    </IonButtons>
                    <IonTitle>Octubre</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding month--content">
               <EventList mes={10}/>
            </IonContent>
        </IonPage>
        );
    };
    
    export default octubre;