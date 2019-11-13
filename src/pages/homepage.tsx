import React from 'react';
import { 
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar
 } from '@ionic/react';

  import './homepage.css';
  import { RouteComponentProps } from 'react-router';

  const homepage: React.FC<RouteComponentProps> = (props) => {
    return (
      <IonPage>
        <IonHeader className="homepage--header">
          <IonToolbar slot="start">
            <img src="/assets/logo-doppler.svg" alt="" className="logo"/>
          </IonToolbar>
        </IonHeader>
        <IonContent className="homepage--page">
            <div className="homepage--welcome">Revisa mes a mes los eventos más importantes del año</div>
          <IonCard className="welcome-card" button={true} onClick={()=>{props.history.push('/enero')}}>
            <img src="/assets/shapes.svg" alt="" />
            <IonCardHeader>
              <IonCardTitle>Enero</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true} onClick={()=>{props.history.push('/febrero')}}>
            <img src="/assets/shapes.svg" alt="" />
            <IonCardHeader>
              <IonCardTitle>Febrero</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true}>
            <img src="/assets/shapes.svg" alt="" />
            <IonCardHeader>
              <IonCardTitle>Marzo</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true}>
            <img src="/assets/shapes.svg" alt="" />
            <IonCardHeader>
              <IonCardTitle>Abril</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true}>
            <img src="/assets/shapes.svg" alt="" />
            <IonCardHeader>
              <IonCardTitle>Mayo</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true}>
            <img src="/assets/shapes.svg" alt="" />
            <IonCardHeader>
              <IonCardTitle>Junio</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true}>
            <img src="/assets/shapes.svg" alt="" />
            <IonCardHeader>
              <IonCardTitle>Julio</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true}>
            <img src="/assets/shapes.svg" alt="" />
            <IonCardHeader>
              <IonCardTitle>Agosto</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true}>
            <img src="/assets/shapes.svg" alt="" />
            <IonCardHeader>
              <IonCardTitle>Septiembre</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true}>
            <img src="/assets/shapes.svg" alt="" />
            <IonCardHeader>
              <IonCardTitle>Octubre</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true}>
            <img src="/assets/shapes.svg" alt="" />
            <IonCardHeader>
              <IonCardTitle>Noviembre</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true}>
            <img src="/assets/shapes.svg" alt="" />
            <IonCardHeader>
              <IonCardTitle>Diciembre</IonCardTitle>
            </IonCardHeader>
          </IonCard>

          
        </IonContent>
      </IonPage>
    );
  };
  
  export default homepage;