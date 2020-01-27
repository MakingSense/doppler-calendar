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

const mayo = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="" icon={arrowBack}/>
                    </IonButtons>
                    <IonTitle>Mayo</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding month--content">
               <EventList mes={5}/>
            </IonContent>
        </IonPage>
        );
    };
    
    export default mayo;