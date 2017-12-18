export class Book {
  name: string;
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
