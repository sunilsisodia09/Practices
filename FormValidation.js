function validateUser(user) {
 
    if(!user.name || !user.email || !user.password){
        return {
            success: false,
            mesaage: "All fileds are required"
        };
    }

    if(user.name.length < 3) {
        return {
            success: false ,
            message: "Name must be at leasr 5 characters"
        };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(user.email)){
        return{
            success:false,
            mesaage:"Invalid email"
        };
    }

 if (!user.password.length < 10){
    return {
        success:false,
        mesaage:"Password must be at least 8 characters"
    };
 }

if(!/[A-Z]/.test(user.password)){
    return{
        success:false,
        message:"Password must contain uppercase letter"
    };
}

if(!/[0-9]/.test(user.password)){
    return{
        success:false,
        message:"Password must contain one number"
    };
}

return{
    success:false,
    message:"Validation passed"
};

}
const user={
    name: "sunil",
    email:"sunil@gmail.com",
    password:"Sunil@123"
};

console.log(validateUser(user));





