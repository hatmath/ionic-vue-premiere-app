<template>
  <ion-page>

    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Cycle de vie</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="ion-text-center milieu">
        <p>Voir console pour étapes du cycle de vie</p>
      </div>
    </ion-content>

    <ion-footer>
      <ion-toolbar color="secondary">
        <ion-title>Pied de page</ion-title>
      </ion-toolbar>
    </ion-footer>

  </ion-page>
</template>
  
<script lang="ts">

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonBackButton, IonButtons, } from '@ionic/vue';

import { defineComponent } from 'vue';

export default defineComponent({
  ionViewDidEnter() {
    console.log("Home page did enter")
  },
  ionViewDidLeave(){
    console.log("Home page did leave")
  },
  ionViewWillEnter(){
    console.log("Home page will enter")
  },
  ionViewWillLeave(){
    console.log("Home page will leave")
  },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonBackButton,
    IonButtons,
  }, 
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