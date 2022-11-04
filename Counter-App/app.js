let count = 0;
const Increment=()=>{
    count++
    document.getElementById('num').innerHTML=count;
}
const Decrement=()=>{
    count--
    document.getElementById('num').innerHTML=count;
}
const Reset=()=>{
    count = 0
    document.getElementById('num').innerHTML=count;
}

const CountTillTen=()=>{
    if(count==10){
        count=0
    }else{
        count++
    }
    document.getElementById('num').innerHTML=count;
}
