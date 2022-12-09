baseDatos = JSON.parse(localStorage.getItem("login"));

let userLog
if (!baseDatos) {
    cargaDatosInicialesBase();
}

function guardaDatosInicialesBase() {
    localStorage.setItem("login", JSON.stringify(baseDatos));
}

function cargaDatosInicialesBase() { 
baseDatos = {
     papu:{
        password:"jejeje"
     },
     juan:{
        password:"lalala"
     },
     profe:{
        password:"1234567"
     },
};
}

async function menuBasic(){
    option_menuBasic = -1
    await swal.fire({
        title: 'Welcome',
        showConfirmButton: false,
        html:  `
        <button class="swal2-confirm swal2-styled"  onclick='option_menuBasic=0;Swal.close()'> 
            Register new user 
        </button>
        <br>
        <button class="swal2-confirm swal2-styled"   onclick='option_menuBasic=1;Swal.close()'>
            Login 
         </button>
        `,
    })

switch (option_menuBasic)  {
    case 0:
           registerNewUser()
        break;
    case 1:
        login();
        break;
    default:
        await menuBasic();
        break;
 }
}


async function registerNewUser (){
    option_registerNewUser = -1;
      await swal.fire({
        title:"Register",
        showConfirmButton: false,
        html: ` 
        <input class="swal2-input" placeholder="user" id="user">
        <input type="password" class="swal2-input" placeholder="password" id="password">
        <br>
        <button class="swal2-confirm swal2-styled"  onclick='option_registerNewUser=0;swal.clickConfirm()'> Create new user </button>
        <br>
        <button class="swal2-confirm swal2-styled"  onclick='option_registerNewUser=1;swal.close()'> I have account </button>
        `,
        preConfirm:()=>{
          let user     = document.getElementById("user").value;
          let password = document.getElementById("password").value;
            if (!user) {
            swal.showValidationMessage("No found user");
            return false;
          }
           if (!password) {
            swal.showValidationMessage("No password found");
            return false;
           }
        baseDatos[user] = {}
        baseDatos[user].password = password;
        guardaDatosInicialesBase();
        return true;
        },
    });
  switch (option_registerNewUser) {
      case 0:
        menuBasic();
          break;
        case 1:
            menuBasic();
            break;
            default:
                menuBasic();
                break;
  }
}


async function login() {
       await swal.fire({
        title:"Welcome ",
        confirmButtonText:"Login",
        html: ` 
        <div style="margin:.5rem">  <input  placeholder="user" id="user">
        <input type="password" placeholder="password" id="password" >
        </div>`,
        preConfirm:()=>{
            let user = document.getElementById("user").value;
            let password = document.getElementById("password").value;    
            if(!user){
             swal.showValidationMessage("No user exist")
              return false;
            }
            if (!password){
                swal.showValidationMessage("No password exist")
                 return false;
               }
            let  datos  = baseDatos[user] 
              if(!datos) {
            swal.showValidationMessage("User not  exist");
            return false;
            } if (datos.password != password) {
            swal.showValidationMessage("Password wrong")
            return false;
            }
              userLog = datos
              return true
        },    
    });
}