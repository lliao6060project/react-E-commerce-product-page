import type { CartItem } from '@/common/types'

export interface CartState {
  count: number
  cartCount: number
  min: number
  max: number
  currentProduct: CartItem
  cartList: CartItem[]
}