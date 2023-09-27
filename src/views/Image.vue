<template>
  <ion-page>

    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Images</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-item>
        <ion-img src="/assets/img/01d.png"></ion-img>
        <!-- <img src="assets/img/01d.png"> -->
      </ion-item>
      <ion-item>
        <ion-img :src="imageSrc"></ion-img>
      </ion-item>
    </ion-content>

    <ion-footer>
      <ion-toolbar color="secondary">
        <ion-title>Pied de page</ion-title>
      </ion-toolbar>
    </ion-footer>

  </ion-page>
</template>
  
<script lang="ts">

import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonBackButton, IonButtons, IonButton,
  IonItem, IonLabel, IonImg, 
} from '@ionic/vue';

import { defineComponent } from 'vue';
import { loadingController } from '@ionic/vue';
import { Geolocation } from '@capacitor/geolocation';

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonBackButton,
    IonButtons,
    IonButton,
    IonItem,
    IonLabel,
    IonImg,
  },
  data() {
    return {
      imageSrc: "http://openweathermap.org/img/wn/10d@2x.png",
    }
  },
});

</script>