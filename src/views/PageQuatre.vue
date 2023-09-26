<template>
  <ion-page>

    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Page 4</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-item>
        <ion-label>Nom: </ion-label>
        <ion-input v-model="monNom"></ion-input>        
      </ion-item>
      <ion-item>
        <ion-label>--> </ion-label>
        <ion-label>{{monNom}}</ion-label>
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

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonBackButton, IonButtons, IonButton,  
  IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonTextarea } from '@ionic/vue';

import { alertController } from '@ionic/vue';

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
    IonButton,
    IonItem, 
    IonLabel, 
    IonInput, 
    IonSelect, 
    IonSelectOption,
    IonTextarea,
  },
  methods: {
   data() {
      return {
        monNom: "",
      }
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