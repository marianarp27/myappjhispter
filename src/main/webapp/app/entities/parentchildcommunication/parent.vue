<template>
  <div>
    <h5>Communication Child and Parent</h5>
    <br />
    <b-input-group prepend="Parcel One">
      <b-form-input v-bind:value="parentParcelOne" v-on:input="onInputReceivedParcelOne" />
    </b-input-group>

    <b-input-group prepend="Parcel Two">
      <b-form-input v-model="parentParcelTwo" />
    </b-input-group>

    <br />
    <child class="col" :parcelOne="parentParcelOne" :parcelTwo="parentParcelTwo" @parcelChildChange="onParcelChildChange" />
    <br />
    <p>Result of sum of parcels: {{ sum }}</p>
  </div>
</template>

<script lang="ts" src="./parent.component.ts"></script>
