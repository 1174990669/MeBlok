window.onload=function(){
	window.onblur = function() {
		    document.title = "别离开太久了哈(●—●)";
		};
		window.onfocus = function() {
		    document.title = "兔小白的博客";
		}
		
	var aLi=document.getElementsByClassName('li');
	var aUl=document.getElementsByClassName('ul-li');

	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index=i;
		aLi[i].onmousemove=function(){  
			for (var i = 0; i < aUl.length; i++) {
				aUl[i].index=i;
				aLi[i].style.background='transparent';
				this.style.background='#f77825';
				// console.log(aLi[i]);
				aUl[i].style.display="none";
				aUl[this.index].style.display="block";
			}
		}
	};
	var oUl=document.getElementsByClassName('head-ul')[0];
	var aL=oUl.getElementsByTagName('li');
	var aA=oUl.getElementsByTagName('a');
	// console.log(aA)
	for (var j = 0; j < aL.length; j++) {
		aL[j].index=j;
		aL[j].onmousedown=function(){
			for (var j = 0; j < aA.length; j++) {
				aA[j].index=j;
				aL[j].style.background='transparent';
				aL[this.index].style.background='rgba(197,164,75,0.6)';
				aA[j].style.color='#666';
				aA[this.index].style.color='rgb(41,99,76)';
			}
		};
		aL[j].onmousemove=function(){
			for (var j = 0; j < aA.length; j++) {
				aA[j].index=j;
				aA[j].style.color='#666';
				aA[this.index].style.color='#999';
			}
		}

	}
}