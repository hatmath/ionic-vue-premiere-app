<template>
  <ion-page>

    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="ion-text-center">
        <p>Page d'acceuil</p>
        <IonButton expand="block" color="medium" href="/pageUn">
          Redirection
        </IonButton>
        <IonButton expand="block" color="medium" href="/pageDeux">
          Boite de dialogue
        </IonButton>
        <IonButton expand="block" color="medium" href="/pageTrois">
          Formulaire
        </IonButton>
        <IonButton expand="block" color="medium" href="/pageQuatre">
          Affichage de données
        </IonButton>
      </div>
    </ion-content>

    <ion-footer>
      <ion-toolbar color="secondary">
        <ion-title>Pied de page</ion-title>
      </ion-toolbar>
    </ion-footer>

  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter } from '@ionic/vue';
</script>

<style scoped>

</style>
