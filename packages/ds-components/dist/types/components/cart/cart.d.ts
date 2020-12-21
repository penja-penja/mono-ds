import { CartItemInterface } from './cart.interfaces';
export declare class Cart {
  cartItems: Array<CartItemInterface>;
  totalAmount: number;
  subtotalUpdatedHandler(event: CustomEvent<any>): void;
  setTotalAmount(): void;
  componentWillRender(): void;
  render(): any;
}
