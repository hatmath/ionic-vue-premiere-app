<template>
  <ion-page>

    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Fetch JSON</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-item>
        <ion-label>Titre album: </ion-label>
        <ion-label>{{ titre }}</ion-label>
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
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonBackButton, IonButtons,
  IonItem, IonLabel,
} from '@ionic/vue';

import { loadingController } from '@ionic/vue';

import { defineComponent } from 'vue';

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
    IonItem,
    IonLabel,
  },
  data() {
    return {
      titre: "",
    }
  },
  ionViewDidEnter() {
    console.log("Home page did enter")
    this.getJSON();
  },
  methods: {
    async getJSON() {
      const loading = await loadingController.create({
        message: 'Attendre SVP ...',
      });
      await loading.present();
      let url = "https://StephaneDGill.github.io/disque.json";
      fetch(url)
      .then(reponse => reponse.json())
      .then(data => {
        console.log(data);
        this.titre = data.titre_album;
        loading.dismiss();
      });
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