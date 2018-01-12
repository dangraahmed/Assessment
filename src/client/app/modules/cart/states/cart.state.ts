export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
}

export interface ICartProduct {
    product: IProduct;
    quantity: number;
}

export interface ICartState {
    products: Array<IProduct>;
    selectedProduct: Array<ICartProduct>;
}
