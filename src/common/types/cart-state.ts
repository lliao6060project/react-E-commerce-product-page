import type { CartItem } from '@/common/types'

export interface CartState {
  count: number
  cartCount: number
  min: number
  max: number
  cartItems: CartItem[]
}