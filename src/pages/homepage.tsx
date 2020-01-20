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
            <img src="/assets/logo-doppler.svg" alt="Doppler" className="logo"/>
          </IonToolbar>
        </IonHeader>
        <IonContent className="homepage--page">
            <div className="homepage--welcome">Revisa mes a mes los eventos más importantes del año</div>
          <IonCard className="welcome-card" button={true} onClick={()=>{props.history.push('/enero')}}>
            <img src="/assets/ilustraciones/enero.svg" alt="Enero" />
            <IonCardHeader>
              <IonCardTitle>Enero</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true} onClick={()=>{props.history.push('/febrero')}}>
            <img src="/assets/ilustraciones/febrero.svg" alt="Febrero" />
            <IonCardHeader>
              <IonCardTitle>Febrero</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true} onClick={()=>{props.history.push('/marzo')}}>
            <img src="/assets/ilustraciones/marzo.svg" alt="Marzo" />
            <IonCardHeader>
              <IonCardTitle>Marzo</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true} onClick={()=>{props.history.push('/abril')}}>
            <img src="/assets/ilustraciones/abril.svg" alt="Abril" />
            <IonCardHeader>
              <IonCardTitle>Abril</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true} onClick={()=>{props.history.push('/mayo')}}>
            <img src="/assets/ilustraciones/mayo.svg" alt="Mayo" />
            <IonCardHeader>
              <IonCardTitle>Mayo</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true} onClick={()=>{props.history.push('/junio')}}>
            <img src="/assets/ilustraciones/junio.svg" alt="Junio" />
            <IonCardHeader>
              <IonCardTitle>Junio</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true} onClick={()=>{props.history.push('/julio')}}>
            <img src="/assets/ilustraciones/julio.svg" alt="Julio" />
            <IonCardHeader>
              <IonCardTitle>Julio</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true} onClick={()=>{props.history.push('/agosto')}}>
            <img src="/assets/ilustraciones/agosto.svg" alt="Agosto" />
            <IonCardHeader>
              <IonCardTitle>Agosto</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true} onClick={()=>{props.history.push('/septiembre')}}>
            <img src="/assets/ilustraciones/septiembre.svg" alt="Septiembre" />
            <IonCardHeader>
              <IonCardTitle>Septiembre</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true} onClick={()=>{props.history.push('/octubre')}}>
            <img src="/assets/ilustraciones/octubre.svg" alt="Octubre" />
            <IonCardHeader>
              <IonCardTitle>Octubre</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true} onClick={()=>{props.history.push('/noviembre')}}>
            <img src="/assets/ilustraciones/noviembre.svg" alt="Noviembre" />
            <IonCardHeader>
              <IonCardTitle>Noviembre</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="welcome-card" button={true} onClick={()=>{props.history.push('/diciembre')}}>
            <img src="/assets/ilustraciones/diciembre.svg" alt="Diciembre" />
            <IonCardHeader>
              <IonCardTitle>Diciembre</IonCardTitle>
            </IonCardHeader>
          </IonCard>

          
        </IonContent>
      </IonPage>
    );
  };
  
  export default homepage;