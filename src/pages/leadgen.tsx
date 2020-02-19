import React, {useState} from 'react';
import { 
    IonContent,
    IonPage,
    IonInput,
    IonCheckbox,
    IonButton,
    IonHeader,
    IonToolbar,
    IonItem,
    IonLabel
 } from '@ionic/react';
import './leadgen.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

async function flagDoppler(status) {
  await Storage.set({
    key: 'flagDoppler',
    value: JSON.stringify(status)
  });
}

async function postDataDoppler(emailAccount:string, politicas:boolean, promociones:boolean){
  const dataEmail = {
    email:emailAccount,
    fields:[{
      name: "AceptoPoliticaPrivacidad",
      value: politicas
    },
     {
       name: "AceptoPromocionesDopplerAliados",
       value: promociones
     }
  ]
  }, 
  accountName = 'upgrade%40makingsense.com', 
  apikey = '8EA4F0E0A0B9C3BCBA85071C9ED33FD3',
  listId = '27502530';
  let res = await axios.post('https://restapi.fromdoppler.com/accounts/'+ accountName +'/lists/'+ listId +'/subscribers?api_key='+ apikey, dataEmail);
  console.log(res);
}

// flagDoppler(false);

const Leadgen = (props) => {
  const [ usrEmail, setUsrEmail ] = useState('');
  const [ usrPoliticas, setUsrPoliticas ] = useState(false);
  const [ usrPromociones, setUsrPromociones ] = useState(false);
  const [ formErrors, setFormErrors ] = useState('');
  const [ flag, setFlag ] = useState(false);
  const [ btnSubmit, setBtnSubmit ] = useState(true);

  const checkFlagLS = async() => {
    try {
      const tmp_flag = await Storage.get({key: 'flagDoppler'});
      setFlag(JSON.parse(tmp_flag.value));
    } catch (e) {
      setFormErrors(e);
      console.log(formErrors);
    }
  }
  
  const submit = async() => {
    try {
      await postDataDoppler(usrEmail, usrPoliticas, usrPromociones);
      flagDoppler(true);
      checkFlagLS();
      props.history.push('/homepage');
    } catch (e) {
      setFormErrors(e);
      console.log(formErrors);
    }
  }
  
  checkFlagLS();
  if (flag){
    return <Redirect to="/homepage" />
  }
  
    return (
      <IonPage>
        <IonHeader className="leadgen--header">
          <IonToolbar slot="start">
            <img src="/assets/logo-doppler.svg" alt="Doppler" className="logo"/>
          </IonToolbar>
        </IonHeader>
          <IonContent className="leadgen--page">
            <div className="home-leadgen">
            <div className="leadgen--welcome">Ingresa tu correo</div>
                <div className="form-container">
                <form onSubmit={(e) => {e.preventDefault(); submit();}}>
                      <IonInput inputMode="email" pattern="^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" name="email" value={usrEmail} onIonChange={(e) => setUsrEmail(e.detail.value)} placeholder="Ingresa tu Email" className="input-leadgen"></IonInput>
                      <IonItem lines="none" className="check-items">
                        <IonLabel>Acepto la <a href="https://www.fromdoppler.com/legal/privacidad" target="_blank" rel="noopener noreferrer">Política de Privacidad</a> de Doppler</IonLabel>
                        <IonCheckbox slot="start" className="checks" onIonChange={(e) => {
                          setBtnSubmit(!e.detail.checked);
                          setUsrPoliticas(e.detail.checked);
                          }}></IonCheckbox>
                      </IonItem>
                      <IonItem lines="none" className="check-items">
                        <IonLabel>Acepto recibir promociones de Doppler y sus aliados</IonLabel>
                        <IonCheckbox slot="start" className="checks" onIonChange={(e) => {
                          setUsrPromociones(e.detail.checked);
                          }}></IonCheckbox>
                      </IonItem>
                    <IonButton shape="round" className="btn-reg" type="submit" color="success" disabled={btnSubmit}>SUSCRÍBETE</IonButton>
                    <p></p>
                  </form>
                </div>
            </div>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Leadgen;