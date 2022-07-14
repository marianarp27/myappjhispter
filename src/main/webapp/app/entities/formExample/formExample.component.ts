import { Component, Vue } from 'vue-property-decorator';
import { ISelection, Selection } from '@/entities/formExample/model/selection.model';
import { IMessage, Message } from '@/entities/formExample/model/message.model';

@Component({})
export default class FormExample extends Vue {
  private name: { [k: string]: any } = {
    first: null,
    last: null,
  }; // objeto dinamico

  private selection: ISelection = new Selection('', []);

  private submitted = false;

  private message: IMessage = new Message('', 100);

  public submit(): void {
    this.submitted = true;
    console.log(`submitted=${this.submitted}`);
  }
}
