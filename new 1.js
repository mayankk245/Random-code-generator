function submit() {
    var d = new Date().getTime();
    var uuid = 'jxxx-ixxx-xxxo'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};


document.getElementById('submit').onclick = function() {
    document.getElementById('uuid').innerHTML = submit();
};

document.getElementById('uuid').innerHTML = submit();

