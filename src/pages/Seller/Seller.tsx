import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent, IonRadioGroup, IonListHeader, IonPage, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonHeader, IonButton  } from '@ionic/react';

import ActiveBotton from '../../components/ActiveBotton';
import InActiveBotton from '../../components/InActiveBotton';


const Seller: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
              <ActiveBotton />
              <InActiveBotton />
            </IonButtons>
            <IonTitle>seller</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Vendedor />
        </IonContent>
      </IonPage>
    );
  };

const Vendedor = ()=> {
  return (
  <IonContent>
    {/*-- List of Text Items --*/}
    <IonListHeader>
      <IonLabel>Nombre del Vendedor</IonLabel>
    </IonListHeader>
    <IonList>
      <IonItem>
        <IonLabel>Cristian D. Ceballos</IonLabel>
        < ActiveBotton />
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Mateo Sánchez Toro</IonLabel>
        <InActiveBotton />
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Nicolás Roldán</IonLabel>
        <InActiveBotton />
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Paola Vallejo</IonLabel>
        <ActiveBotton />
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Super Mario Bros</IonLabel>
        <ActiveBotton />
      </IonItem>
    </IonList>

    {/*-- List of Input Items --*/}
    <IonList>
<IonRadioGroup value="biff">
  <IonListHeader>
    <IonLabel>Nombre del producto</IonLabel>
  </IonListHeader>
  <IonItem>
    <IonLabel>Papas</IonLabel>
    <IonRadio slot="start" value="biff" />
  </IonItem>

  <IonItem>
    <IonLabel>Mango</IonLabel>
    <IonRadio slot="start" value="griff" />
  </IonItem>

  <IonItem>
    <IonLabel>Golosinas</IonLabel>
    <IonRadio slot="start" value="buford" />
  </IonItem>
</IonRadioGroup>
{/*--------------------------------------------------------------*/}
      <IonItem>
        <IonLabel>Chocolatinas</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
      <IonItem>
        <IonLabel>Galletas</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
      <IonItem>
        <IonLabel>Chicles</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
      <IonItem>
        <IonLabel>Sanduches</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
    </IonList>
{/*--------------------------------------------------------------*/}
    {/*-- List of Sliding Items --*/}
    <IonList>
      <IonItemSliding>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>
  </IonContent>
);
}

export default Seller;