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

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock? : number;
// }

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수

type UpdateProduct = Partial<Product>; // 옵셔널 한 것과 같은 효과

function updateProductItem(productItem: Partial<Product>) {}

// 4. 유틸리티 타입 구현 - Partial

interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1.
// type UserProfileUpdate = {
//   username?: UserProfile["username"];
//   email?: UserProfile["email"];
//   profilePhotoUrl?: UserProfile["profilePhotoUrl"];
// };

// #2. (mapped type)

type UserProfileKeys = keyof UserProfile;

type UserProfileUpdate = {
  [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p];
};

// #3.

type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// #4 Partail. (제네릭 첨가)

type Subset<T> = {
  [p in keyof T]?: T[p];
};
