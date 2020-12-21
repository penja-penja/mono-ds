import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CartSubtotal {
  subtotalUpdated: EventEmitter<any>;
  productId: string;
  maxQty: number;
  price: number;
  subtotal: number;
  private buildMaxQtyOptions;
  private subtotalUpdatedHandler;
  componentWillLoad(): void;
  render(): any;
}
