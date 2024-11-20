let input = document.querySelector("input");
let generate = document.querySelector("button");
let copy = document.querySelector("i");
let put = document.querySelector(".put");



generate.addEventListener("click" , () => {
    const char = "0123456789abcdefgijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    const length = 12;

        for (let i = 0; i < length ; i++) {
            password +=  char.charAt(Math.floor(Math.random()*char.length))
        }
        input.value = password;
        console.log(password.length);
        

})

copy.addEventListener("click" , () =>{
    put.innerHTML = input.value;
    const ans = document.querySelector("input").value
    navigator.clipboard.writeText(ans);
    alert("Copied to clipboard")
})
