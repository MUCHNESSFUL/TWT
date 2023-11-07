// 遍历数组1
{
    var fruit = ["apple","banana","peach","orange"];
    var lth1 = fruit.length;
    var ARR1,i;
    ARR1 = "";
    for (i = 0; i < lth1; i++) {
        ARR1 += fruit[i] + " ";
    }
    console.log(ARR1);
    document.getElementById("arr1").innerHTML = ARR1;
}
// 遍历数组2
{
    var cars,ARR2;
    cars = ["Audi","Benz","Volkswagen","Toyota"];
    ARR2 = "";
    for (let x of cars) {
        ARR2 += x + " " ;
        document.getElementById("arr2").innerHTML = ARR2;
    }
}
// 遍历数组3
{
    var persons,ARR3;
    persons = ["Steven","Peter","John","Mike"]
    ARR3 = "";
    persons.forEach(item);
    document.getElementById("arr3").innerHTML = ARR3;
    function item(value) {
        ARR3 += value + " ";
    }
}
// 显示时间
{
    function time() {
        var D =new Date();
        return D.getMonth() + 1 + "月" + D.getDate() + "日" + D.getHours() + "时" + D.getMinutes() + "分" + D.getSeconds() + "秒"
    }
    setInterval(function() {
        document.getElementById("date").innerHTML = time();
    },1000)
    
}
// 翻转字符串
{
    function reverseString(str) {
        var splitString = str.split('');
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join('');
        return joinArray;
    }
    function myfunction() {
        document.getElementById("reverse").innerHTML = reverseString('helloworld');
    }
} 
// 数组去重
{
    var arr = [1, 2,2, 4, 5, 6, 6, 8, 9,9]
    function removerepetition() {
        for (i = 0; i < arr.length; i++) {
            for (j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    arr.splice(j,1)
                    j--
                }
            }
        }
        return arr
    }
    let result = removerepetition()
    console.log(result)
    document.getElementById("remove").innerHTML = result
}
// 元素随机排序
{
    // 1
    var arr = [1,2,3,4,5,6,7,8,9,10]
    function shuffle() {
        let newArr = []
        while (arr.length > 0) {
        let ranIndex = Math.floor(Math.random() * arr.length)
        newArr.push(arr[ranIndex])
        arr.splice(ranIndex, 1)
        }
    return newArr
    }
    document.getElementById("random").innerHTML = shuffle()
    console.log(shuffle())
    // 2
    let arr1 = [1,2,3,4,5,6,7,8,9,10]
    arr1.sort(function(){return Math.random() - 0.5})
    console.log(arr1)
}
// 不用循环 打印1-100中3的倍数
{
    let arr2 = []
    for (i = 1; i <= 100; i++) {
        arr2.push(i);
    }
    console.log(arr2);
    // map使用失败
    let three = arr2.map((function (v,k) {
        if (v % 3 == 0) {
            return v;
        }else {function A() {arr2.splice(k,1);}
    A()}
    }))
        console.log(three);
    // filter使用成功
    let three1 = arr2.filter((arr2) => arr2 % 3 == 0 );
    console.log(three1);
    document.getElementById("triple").innerHTML = three1;
}
// 将一个对象以Key: Value形式输出(id后三位变*失败)
{
    var xiaoming = {
        name: 'xiaoming',
        age: 18,
        preference: {
            food: 'beaf',
            sport: 'football'
        },
        _secret: 'eater',
        id:'3018233666'
    };
    var str1 = Object.values(xiaoming)[4]
    var str2 = str1.slice(0,-3)
    var str3 = str2 + '***'
    xiaoming.id = str3
    // 万不得已的方法
    // console.log(Object.values(xiaoming)[4].replace(/6/g,"*"))
    // 不太行的方法1
    // const replaceStr = (str,index,char) => {
    //     const strAry = str.split('');
    //     strAry[index] = char;
    //     return strAry.join('');
    // }
    // console.log(replaceStr(Object.values(xiaoming)[4],7,'*'))
    // console.log(Object.values(xiaoming))
    for (var key in xiaoming) {
        var A1 = [];
        // var A2 = []
        A1.push(key);
        // A2.push(xiaoming[key])
        var A3 = A1[0].replace("_","");
        console.log(A3 + ":")
        console.log(xiaoming[key])
    }
}
// 基于条件过滤一个数组对象
{
    const data = [
        {
          id: 1,
          name: 'john',
          age: 24
        },
        {
          id: 2,
          name: 'mike',
          age: 50
        }
      ];
    //   也可用find
      data.forEach(Object => {
        if(Object.age > 24){
            console.log("id:" + Object.id);
            console.log("name:" + Object.name);
        }
      })
    }         
    // console.log(reducedFilter(data,['id', 'name'],item => item.age > 24))
    // const data = [
    //     {order_num: '123456' , order_name: '张三'},
    //     {order_num: '234567' , order_name: '李四'},
    //     {order_num: '345678' , order_name: '黄五'}
    //   ]
    //   filterByName = (data, order_name) => {
    //     return data.filter(item => item.order_name === order_name)
    //   }
      
    //   [{order_num: '234567', name: '李四'}]
    //   console.log(filterByName(data, '李四'))
    // 小作业
{
    var currentImg = Math.floor(Math.random() * 5);
    var arr3 = new Array();
    arr[0] = "./01.jpg";
    arr[1] = "./02.jpg";
    arr[2] = "./03.jpg";
    arr[3] = "./04.jpg";
    arr[4] = "./05.jpg";
    document.body.style.backgroundImage = "url(" + arr[currentImg] + ")";
}


