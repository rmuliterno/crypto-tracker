export interface ICrypto {
  id: string;
  image: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  circulating_supply: number;
}