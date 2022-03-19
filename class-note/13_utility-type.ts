interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받아오기 위한 API  함수
function fetchProducts(): Promise<Product[]> {
  //..
}

interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

// Product와 중복된 부분들이 많음.

// function displayProductDetail(shoppingItem: {
//   id: number;
//   name: string;
//   price: number;
// }) {}

// function displayProductDetail(shoppingItem: ProductDetail) {
//     //..
// }

// Pick  이용

type ShoppingItem = Pick<Product, "id" | "name" | "price">;

function displayProductDetail(
  shoppingItem: Pick<Product, "id" | "name" | "price">
) {
  //..
}
