import { Component, Vue } from 'vue-property-decorator';
import Child from '@/entities/parentchildcommunication/child.vue';

@Component({
  components: {
    child: Child,
  },
})
export default class Parent extends Vue {
  public parentParcelOne = '0'; // v-bind + v-on:input
  public parentParcelTwo = '0'; // v-model

  public childParcelOne = '';

  public onInputReceivedParcelOne(e: any): void {
    this.parentParcelOne = e;
  }

  public onParcelChildChange(e: any): void {
    this.childParcelOne = e;
  }

  public get sum(): number {
    const parcelOneAsNumber: number = Number.isNaN(this.parentParcelOne) ? 0 : parseInt(this.parentParcelOne);
    const parcelTwoAsNumber: number = Number.isNaN(this.parentParcelTwo) ? 0 : parseInt(this.parentParcelTwo);
    const parcelThreeAsNumber: number = Number.isNaN(this.childParcelOne) ? 0 : parseInt(this.childParcelOne);

    return parcelOneAsNumber + parcelTwoAsNumber + parcelThreeAsNumber;
  }

  // public callback(e: any): void {
  //   // console.log(`Received event with  ${e}`);
  //   this.resulParcel = e;
  //   console.log(`Received:  ${e}`);
  // }
  //
  // public handleEventInput(e: any): void {
  //   // this.parentVariable = isNaN(e) ? 0 : parseInt(e);
  //   this.parentVariable = e;
  //     console.log(`Number:` + e);
  // }
}
