export interface CartImage {
  alt: string;
  src: string;
}
export interface CartSubtotal {
  maxQty: number;
  price: number;
}
export interface CartHeader {
  link: string;
  manufacturerName: string;
  productId: string;
  productName: string;
}
export interface CartFooter {
}
export interface CartItemInterface {
  id: string;
  qty: number;
  footer?: CartFooter;
  header: CartHeader;
  image: CartImage;
  subtotal: CartSubtotal;
}
