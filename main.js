newsBox = document.getElementById('newsBox')
newsList = newsBox.getElementsByTagName('li');
for(let i=0;i<newsList.length;i+=2){
    newsList[i].parity='odd'
    //为奇数行li添加属性parity='odd'
    newsList[i].style.backgroundColor='lightpink'
}
for(let i=1;i<newsList.length;i+=2){
    newsList[i].style.backgroundColor='lightcyan'
}
for(let i=0;i<newsList.length;i++){
    newsList[i].onmouseover=function(){
        this.bgcolor=this.style.backgroundColor;
        //记录原背景色
        newsList[i].parity?this.style.backgroundColor='lightcoral':this.style.backgroundColor='lightblue'
        //鼠标移入判断奇偶，奇数行背景为lightcoral偶数行划过背景为lightblue
    }
    newsList[i].onmouseout=function(){
        this.style.backgroundColor=this.bgcolor;
        //
    }
}