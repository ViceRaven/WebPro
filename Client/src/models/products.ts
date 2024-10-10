import data from '../data/products.json'

;```Function that returns total```

export function getAll() {
  return {
    items: data.items,
    total: data.total
  }
}
