var arr = ['first', 'second', 'third', 'forth'];
var num = 0;
var elem = document.getElementsByClassName('pos');
// elem[num].style.background-color = 'black';
function next(){
    // var cont = ('url('+toString(num+1)+'.png)');
    
    if (num<arr.length) {
        // num++;
        document.getElementById('src').classList.toggle(arr[num+=1]);
    }
    else{
        document.getElementById('src').classList = (arr[num=0]);
    }
    if(num==0){
        document.getElementById('one').classList.toggle('act');
    }
    else if(num==1){
        document.getElementById('two').classList.toggle('act');
    }
    else if(num==2){
        document.getElementById('three').classList.toggle('act');
    }
    else if(num==3){
        document.getElementById('four').classList.toggle('act');
    }
 }
function prev(){
    // var cont = ('url('+toString(num+1)+'.png)');
    if (num>0) {
        // num++;
        document.getElementById('src').classList.toggle(arr[num-=1]);
    }
    else{
        num = 3;
        document.getElementById('src').classList.toggle(arr[num]);
    }
    if(num==0){
        document.getElementById('one').classList.toggle('act');
    }
    else if(num==1){
        document.getElementById('two').classList.toggle('act');
    }
    else if(num==2){
        document.getElementById('three').classList.toggle('act');
    }
    else if(num==3){
        document.getElementById('four').classList.toggle('act');
    }
}
// alert('here we are!');