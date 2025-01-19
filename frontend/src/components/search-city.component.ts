import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  props: {
  }
})
export default class SearchCity extends Vue {

  @Prop({ type: Function, required: true })
  public placeChanged!: (place: any) => void;

  @Prop({ type: Object, required: true })
  public selectedPlace!: { lat: number; lng: number }

  mounted() {
    console.log('SearchCity mounted');
  }

  onPlaceSelect(place: any) {
    console.log('Place selected:', place, this.selectedPlace);
    this.$emit('placeChanged', place);
  }

}