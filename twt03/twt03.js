function check(thisform) {
    var username = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
    if (username == "雾里看花" && pass == "ZkfWsnIi1JMkyECi" || username == "花香蝶自开" && pass == "VSESsjVtwnjLvS7C" || username == "落红无情君有情" && pass == "gDtP2VMBjT2cxXnJ" || username == "烟花春复秋" && pass == "OIggmaCt0YrLx116" || username == "墨染殇雪" && pass == "fRa4ZFHsbaXzr51i") {
        alert("登陆成功")
        document.getElementById("T").submit();
    }
    else {
        alert("用户名或密码错误！")
    }
}
var t = decodeURIComponent(window.location.search.split('=')[1])
console.log(t)
document.getElementById('W').innerHTML = "欢迎您，" + t
function disappeal1() {
    b1.style.display = 'none'
}
function disappeal2() {
    b2.style.display = 'none'
}
function disappeal3() {
    b3.style.display = 'none'
}
function disappeal4() {
    b4.style.display = 'none'
}
function disappeal5() {
    b5.style.display = 'none'
}
function disappeal6() {
    b6.style.display = 'none'
}
// {
//     var a = location.search.substring(1);
//     var arr = a.split('=');
//     document.getElementById("welcome").innerHTML = arr[1]
//     console.log(arr)
// }