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

  onPlaceSelect(place: any) {
    this.$emit('placeChanged', place);
  }

  onMapClick(event: any) {
    const place = {
      geometry: {
        location: {
          lat: () => event.latLng.lat(),
          lng: () => event.latLng.lng(),
        }
      }
    };
    this.$emit('placeChanged', place);
  }

}