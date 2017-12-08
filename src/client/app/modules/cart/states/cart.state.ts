export interface IProduct {
    id: number;
    name: string;
    price: number;
}

export interface ICartState {
    products: Array<IProduct>;
    selectedProductId: number;
}
