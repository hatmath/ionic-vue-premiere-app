<template>
  <ion-page>

    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Géolocalisation</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-item>
        <ion-label>Longitude: </ion-label>
        <ion-label>{{ this.longitude }}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Latitude: </ion-label>
        <ion-label>{{ this.latitude }}</ion-label>
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
  IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonTextarea
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
    IonInput,
    IonSelect,
    IonSelectOption,
    IonTextarea,
  },
  data() {
    return {
      latitude: 0,
      longitude: 0,
    }
  },
  ionViewDidEnter() {
    console.log("Geo page did enter")
    this.getCurrentPosition();
  },
  methods: {
    async getCurrentPosition() {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log("Current", coordinates);
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
    }
  }

});

</script>
  
<style scoped>
.milieu {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>