import React, {useState} from 'react';
import { 
    IonContent,
    IonPage,
    IonInput,
    IonItem,
    IonLabel,
    IonButton
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

async function postDataDoppler(emailAccount){
  const dataEmail = {email:emailAccount}, 
  accountName = 'disenio%40makingsense.com', 
  apikey = '7ACCFAC1779CA0D2449F3CD3B3B736E8',
  listId = '27293738';

  let res = await axios.post('https://restapi.fromdoppler.com/accounts/'+ accountName +'/lists/'+ listId +'/subscribers?api_key='+ apikey, dataEmail);
}

// flagDoppler(false);

const Leadgen = (props) => {
  const [ usrEmail, setUsrEmail ] = useState('');
  const [ formErrors, setFormErrors ] = useState('');
  const [ flag, setFlag ] = useState(false);

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
      await postDataDoppler(usrEmail);
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
          <IonContent>
            <div className="home-leadgen">
                <div className="form-container">
                <img src="/assets/logo-doppler.svg" alt="Doppler" className="leadgen-logo"/>
                <form onSubmit={(e) => {e.preventDefault(); submit();}}>
                    <IonItem>
                      <IonLabel position="floating">Email:</IonLabel>
                      <IonInput inputMode="email" pattern="^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" name="email" value={usrEmail} onIonChange={(e) => setUsrEmail(e.detail.value)} placeholder="tuemail@tudominio.com"></IonInput>
                    </IonItem>
                    <IonButton className="btn-reg" type="submit">Registrarse</IonButton>
                    <p></p>
                  </form>
                </div>
            </div>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Leadgen;