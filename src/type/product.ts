interface Product {
  product_name?: string;
  color?: string;
  price?: number;
  image_path?: string;
  type?: string;
  id?: string;
}

interface ProductData extends Product {
  order?: number;
  date?: number; // Represents the timestamp when the data was recorded.
}

export type { Product, ProductData };
