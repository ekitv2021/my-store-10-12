// export class Product{
//     id: number = 0;
//     name: string = '';
//     price: number = 0;
//     category: string = '';
//     image: string = '';
//     description?: string = '';
// }

export interface Product{
    id: number,
    name: string,
    price: number,
    category: string,
    image: string,
    description?: string,
    publishedDate: string,
    code: string,
    discount: number
}