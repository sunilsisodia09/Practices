function calculateTotal(cart){
    let subtotal = 0;

    for(let item of cart){
        subtotal += item.price * item.quantity;
    }

     let discount = 0;
      
    if(subtital > 50000){
        discount = subtoatal *0.10;
    }

    let finalAmount = subtotal -discount;

    return{
         subtotal,
         discount,
         finalAmount
    };
       
}