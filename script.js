let user_db=[]

function goToHomePage(){
    document.getElementById('home').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('customer').style.display = 'none';

    document.getElementById('signup-link').classList.remove('active');
    document.getElementById('login-link').classList.remove('active');
    document.getElementById('home-link').classList.add('active');


}

function goToSignUpPage(){
   document.getElementById('home').style.display = 'none';
   document.getElementById('signup-form').style.display = 'block';
   document.getElementById('login-form').style.display = 'none';
   document.getElementById('customer').style.display = 'none';

   document.getElementById('signup-link').classList.add('active');
   document.getElementById('login-link').classList.remove('active');
   document.getElementById('home-link').classList.remove('active');
}

function goToLogInPage(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('customer').style.display = 'none';

    document.getElementById('signup-link').classList.remove('active');
   document.getElementById('login-link').classList.add('active');
   document.getElementById('home-link').classList.remove('active');
 }
function goCustomerCare(){
    document.getElementById('home').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('customer').style.display = 'block';
    
}


function signup(){
 let firstName = document.getElementById('first-name').value
 let lastName = document.getElementById('last-name').value
 let email = document.getElementById('signup-email').value
 let phoneNumber = document.getElementById('phone-number').value
let password = document.getElementById('signin-password').value
let confirmPassword = document.getElementById('confirm-password').value


let error=false
if(password !==confirmPassword){
    document.getElementById('confirm-password-invalid').style.display='block' 
    error=true 
}
else{
    document.getElementById('confirm-password-invalid').style.display='none' 
}

if(!error){
   
    let userDetails={
        firstName,
        lastName,
        email,
        phoneNumber,
        password,  
    }
    user_db.push(userDetails)
    alert('youe deatails has been saved succesfully')
    document.getElementById('signup-form-id').reset()
   
}
}

function login(){

    let logInEmail=document.getElementById('login-email').value
    let logInPassword=document.getElementById('login-password').value

    if(user_db.find(user => user.email === logInEmail && user.password === logInPassword)){
        alert('acces granted')
    }
    else{
        alert('access denied')
    }
}
