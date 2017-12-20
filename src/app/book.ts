export class Book {
  name: string;
  pages: number;
  chapters: Array<{
    title: string,
    order: number,
    pages: Array<{
      title: string,
      order: number,
      id: string
    }>
  }>
};
