<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Calculatrice</ion-title>
      </ion-toolbar>
    </ion-header>
       
    <ion-content color="dark" :fullscreen="true">
    <ion-input v-model="equation" class="ion-text-end" color="light"></ion-input>
    <ion-grid class="ion-text-center">
      <ion-row>
        <ion-col>
          <ion-button shape="round" color="light">C</ion-button>
        </ion-col>
        <ion-col>
          <ion-button shape="round" color="light">+/-</ion-button>
        </ion-col>
        <ion-col>
          <ion-button shape="round" color="light">&larr;</ion-button>
        </ion-col>
        <ion-col>
          <ion-button shape="round" color="light">&#247</ion-button>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-button shape="round" color="light" @click="addNum('7')">7</ion-button>
        </ion-col>
        <ion-col>
          <ion-button shape="round" color="light">8</ion-button>
        </ion-col>
        <ion-col>
          <ion-button shape="round" color="light">9</ion-button>
        </ion-col>
        <ion-col>
          <ion-button shape="round" color="warming">&#215</ion-button>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <IonButton color="medium" href="/pageDeux">P2</IonButton>
        </ion-col>
      </ion-row>
    </ion-grid>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonInput, IonGrid,IonRow, IonCol, IonButton, IonHeader, IonToolbar, IonTitle, 
  IonButtons, IonBackButton} from '@ionic/vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonInput, 
    IonGrid,
    IonRow, 
    IonCol,
    IonHeader, 
    IonToolbar, 
    IonTitle,
    IonButtons, 
    IonBackButton,
  },
  methods: {
    addNum(num: String) {
      console.log(num);
      this.equation += num;
    },
    data() {
      return {
        equation: '',
      }
    } 
  }
});

</script>

<style scoped>

ion-input {
  font-size: 48px;
  --padding-end: 20px;
}

ion-button{
  height: 50px;
  width: 50px;
  border-radius: 50;
  font-size: 20px;
}
</style>
