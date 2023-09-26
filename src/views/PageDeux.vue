<template>
  <ion-page>

    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Page 2</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="ion-text-center milieu">
        <ion-button @click="afficheDialogue">Afficher</ion-button>
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

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonBackButton, IonButtons, alertController } from '@ionic/vue';

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
  },
  methods: {
    async afficheDialogue() {
      console.log("Mon alerte");
      const alert = await alertController.create({
        header: 'Mon alerte',
        subHeader: 'Sous titre',
        message: 'Ceci est un message d\'alerte',
        buttons: ['OK'],
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss: ', role);
    },  
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