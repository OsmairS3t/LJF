export interface ICategory {
    id: number;
    name: string;
    icon: string;
}

export interface IBalance {
    id: number;
    category: number;
    typebalance: string;
    name: string;
    price: number;
    datebalance: string;
}