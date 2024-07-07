const input = document.getElementById("inputt");
const button = document.querySelectorAll("button");

let str = "";
// let btn = Array.from(button);
// console.log(button);

button.forEach((btn) => {
   btn.addEventListener("click", (e) => {
      if (e.target.innerHTML == "AC") {
         console.log("HELLOo");
         str = "";
         input.value = str;
      } else if (e.target.innerHTML == "=") {
         str = eval(str);
         input.value = str;
      } else if (e.target.innerHTML == "DEL") {
         console.log("Hello from delete");
         str = str.slice(0, str.length - 1);
         input.value = str;
      } else {
         str = str + e.target.innerHTML;
         input.value = str;
      }
   });
});
