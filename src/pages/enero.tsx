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

import Accordion from '../components/accordion';
import { arrowBack } from 'ionicons/icons';
import './months.css';

const enero: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="" icon={arrowBack}/>
                    </IonButtons>
                    <IonTitle>Enero</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding month--content">
                <Accordion title="&#x1F917; 01 - Año nuevo" contentTitle="Envía una Campaña de Email y haz una acción en Redes" content="¡Saluda a tus Suscriptores y seguidores deseándoles un magnífico año!"/>
                <Accordion title="&#x1F917; 04 - Día del Periodista en MX" contentTitle="Haz una acción en Redes" content=""/>
                
            </IonContent>
        </IonPage>
        );
    };
    
    export default enero;