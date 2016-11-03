document.getElementById('link').onclick = function(e) {
    alert('link clicked');
    return false;
}
document.getElementById('paragraph').onclick = function(e) {
    e.stopPropagation();
    e.preventDefault();
    alert('paragraph clicked');
    console.log(e.target);
}

document.getElementById('label').innerHTML = "<s>GOOD!</s> GOOD!"