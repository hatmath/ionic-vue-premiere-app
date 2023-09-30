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
    console.log("View did enter")
    setTimeout(() => {console.log("timeout 3 sec")}, 3000);
  },
  ionViewDidLeave(){
    console.log("View did leave")
  },
  ionViewWillEnter(){
    console.log("View will enter")
  },
  ionViewWillLeave(){
    console.log("View will leave")
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