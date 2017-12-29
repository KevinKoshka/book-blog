interface IArticle {
  title: string;
  chapter: string;
  subtitle: string;
  template: string;
  id: string;
  order: number;
  pages: number;
}

export class Article {
  title: string;
  chapter: string;
  subtitle: string;
  template: string;
  id: string;
  order: number;
  pages: number;
  constructor(article: IArticle) {
    this.title = article.title;
    this.chapter = article.chapter;
    this.subtitle = article.subtitle;
    this.template = article.template;
    this.id = article.id;
    this.order = article.order;
    this.pages = article.pages;
  }
}