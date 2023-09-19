let Pass = document.getElementById("pass")
let Check = document.getElementById("check")


Check.onchange = function() {
    Pass.type = Check.checked ? "text": "password"
};
