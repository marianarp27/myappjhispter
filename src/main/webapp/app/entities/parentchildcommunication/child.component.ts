import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({})
export default class Child extends Vue {
  // @Prop(Number) readonly propParentVariable: number | undefined
  @Prop(String) readonly parcelOne: string | undefined;
  @Prop(String) readonly parcelTwo: string | undefined;

  public parcelChild = '0';

  /**
   * Computed property
   */
  public get sum(): number {
    const parcelOneAsNumber: number = Number.isNaN(this.parcelOne) ? 0 : parseInt(this.parcelOne);
    const parcelTwoAsNumber: number = Number.isNaN(this.parcelTwo) ? 0 : parseInt(this.parcelTwo);
    const parcelThreeAsNumber: number = Number.isNaN(this.parcelChild) ? 0 : parseInt(this.parcelChild);

    return parcelOneAsNumber + parcelTwoAsNumber + parcelThreeAsNumber;
  }

  @Watch('parcelChild', { immediate: true })
  onParcelChildChange(val: number, oldVal: number) {
    console.log(`newValue: ${val} oldVal=${oldVal}`);
    // Send 'parcelChildChange' to parent component
    this.$emit('parcelChildChange', val);
  }
}
