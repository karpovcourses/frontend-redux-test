export interface GoodsAPI {
  image: string;
  name: string;
  info: string;
  price: number;
}

export interface IGoodsItem extends GoodsAPI {
  id: string;
}
