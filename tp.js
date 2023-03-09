var take_input=document.getElementById("take_input")

var take_input_key=document.getElementById("take_input_key")

var save_value=document.getElementById("save_value")

var localstorage_value=document.getElementById("localstorage_value")

var read_localstorage=document.getElementById("read_localstorage")

var delete_daa=document.getElementById("delete")


save_value.onclick=function(){
localStorage.setItem("name", take_input.value);
}
read_localstorage.onclick=function(){
localstorage_value.textContent=localStorage.getItem("name");
}
delete_daa.onclick=function() {
    localStorage.removeItem("name");
}
// function delete_daa() {
//     localStorage.removeItem("name");
// }

