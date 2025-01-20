import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  props: {
  }
})

export default class CardView extends Vue {
  @Prop({ type: String, required: true })
  public label!: string;

  @Prop({ type: String, required: true })
  public value!: string;

  @Prop({ type: String, required: true })
  public customClass!: string;
}

