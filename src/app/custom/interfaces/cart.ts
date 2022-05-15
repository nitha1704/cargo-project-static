export interface CartData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
  seller_id: string;
  seller_nick: string;
  shop_id: string;
  shop_title: string;
  shop_number: string;
  quantity: number;
  totalPrice: number;
  selected: boolean;
}
