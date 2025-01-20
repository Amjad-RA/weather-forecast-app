import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
})
export default class Label extends Vue {
  @Prop({ type: String, required: true })
  public label!: string;

  @Prop({ type: String, required: true })
  public value!: string;
}