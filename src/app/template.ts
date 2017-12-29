interface ITemplate {
  id: string;
  template: string;
}

export class Template {
  id: string;
  template: string;
  constructor(temp: ITemplate) {
    this.id = temp.id;
    this.template = temp.template;
  }
}
