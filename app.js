let customerName = " Sara ";//اسم العميل
let bookTitle = "JavaScript Basics";//عنوان الكتاب
const unitPrice = 150;//سعر الكتاب الواحد
let originalQuantityText = "3";//كمية الادخال
const shippingCost = 30;//تكلفة الشحن

/////////////////////////////////////////////////////

const customerNameTrimmed = customerName.trim();
console.log("cleaned Name:'" + customerNameTrimmed + "'");
console.log("Original Name:'" + customerName + "'");

/////////////////////////////////////////////////////

console.log("Original quantity:", originalQuantityText ,"type:",typeof originalQuantityText);
const originalQuantity= Number(originalQuantityText);
console.log("Numeric quantity:", originalQuantity ,"type:",typeof originalQuantity);

/////////////////////////////////////////////////////

const subtotal= unitPrice * originalQuantity;//450
const total=subtotal+shippingCost;//480

////////////////////////////////////////////////////////

let receipt=`
------------------ اصال بيع ---------------------
customer Name:         ${customerName}
book Title:            ${bookTitle}
unit Price:            ${unitPrice.toFixed(2)}
Quantity:              ${originalQuantity}
-----------------------------------------------
subtotal:              ${subtotal.toFixed(2)} 
shipping               ${shippingCost.toFixed(2)}
-----------------------------------------------
total Amount:          ${total.toFixed(2)}
-----------------------------------------------
`;

//////////////////////////////////////////////////////////
console.log(receipt);
