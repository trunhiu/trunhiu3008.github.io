// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 30000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
const showInfoproduct = (arr) => {
    arr.forEach(product => {
        console.log(`${product.name} - ${product.price} - ${product.brand} - ${product.count}`);
    })
};

showInfoproduct(products)

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
const getTotalMoney = arr => {
    return arr.reduce((total, product) => total + (product.price * product.count), 0);
}

console.log(getTotalMoney(products));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
const findProduct = (arr, brand) => {
    return arr.filter(product => product.brand === brand)
}

console.log(findProduct(products, 'Apple'));

// 4. Tìm các sản phẩm có giá > 20000000
const findPriceProduct = (arr, money) => {
    let newArr = [];
    arr.forEach(product => {
        if(product.price > money) {
            newArr.push(product);
        }
    })
    return newArr;
    // return arr.filter(product => product.price > money);
}

console.log(findPriceProduct(products, 20000000));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
const findProductByName = (arr, name) => {
    return arr.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
}

console.log(findProductByName(products, 'pRo'))

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product



// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
const deltaProduct = (arr, name) => {
    let newArr = [];
    arr.forEach((product, index) => {
        if(product.brand === name) {
            newArr.splice(index, name);
        }
    })
    return newArr;
}

console.log(deltaProduct(products,'Samsung'))



// 8. Sắp xếp giỏ hàng theo price tăng dần

// 9. Sắp xếp giỏ hàng theo count giảm dần

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng