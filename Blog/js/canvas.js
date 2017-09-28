window.onload=function(){
	var dom=document.getElementById("clock");
	var ctx=dom.getContext('2d');//所有画画的基础
	var width=ctx.canvas.width;
	var height=ctx.canvas.height;
	var r=width/2;
	var rem=width/200;
	function drawpanel(){
	    ctx.save();
	    //要先开始一条路线,然后画一个圆圈
	    ctx.translate(r,r);//translate（）重新定义原点,默认原点是左上角
	    ctx.beginPath();
	    ctx.lineWidth=10*rem;//线条样式
	    ctx.arc(0,0,r-5*rem,0,2*Math.PI,false)
	    //如何画？fill,stroke
	    ctx.stroke();
	    ctx.font="18"*rem+"px Arial";//在你填字之前加哦,中间是空格不是逗号.记得所有的动作前都要加ctx.
	    //文本是fillText(text,x,y),属性有font,textAlign,textBaseline，接下来画入小时数.
	    ctx.textAlign="center";
	    ctx.textBaseline="middle";
	    var time=[3,4,5,6,7,8,9,10,11,12,1,2];

	    for(var i=0;i<time.length;i++){
	        var rad=i*Math.PI/6;
	        var x=(r-30*rem)*(Math.cos(rad));
	        var y= (r-30*rem)*(Math.sin(rad));
	        var num=time[i];
	        ctx.fillText(num,x,y);
	    }//浓缩的就是精华,这是小时 .如何画分刻度？360度分成60份，每6度画一个圆
	    for(var i=0;i<60;i++){
	        var rad=i*Math.PI/30;
	        var x=(r-18*rem)*(Math.cos(rad));
	        var y= (r-18*rem)*(Math.sin(rad));
	        ctx.beginPath();//画圆四部曲：开始，选笔颜色啥的，画神马，拿笔
	        if(i%5 ===0){
	            ctx.fillStyle="#000";
	            ctx.arc(x,y,2*rem,0,2*Math.PI,false);
	        }else{
	            ctx.fillStyle="#CCC";
	            ctx.arc(x,y,2*rem,0,2*Math.PI,false);
	        }
	        ctx.fill();
	    }
	}
	//下面是时分秒针的画法，画线用moveTo()起点,lineTo()终点，属性lineCap,lineWidth，rotate()旋转
	function drawhour(h,m){
	    ctx.save();//只要rotate了画布就会对后面的旋转角度进行叠加，所以可以在每次rotate前面后面进行保存与复原
	    var rad=2*Math.PI/12*h;
	    var mrad=2*Math.PI/12*m/60;
	    ctx.rotate(rad+mrad);//放在后面没有用，要在画图开始前
	    ctx.beginPath();
	    ctx.lineWidth=2.5*rem;//不要单位
	    ctx.lineCap="round";//round,square
	    ctx.moveTo(0,10*rem);
	    ctx.lineTo(0,-r/2);
	    ctx.stroke();//stroke才可以，不能fill
	    ctx.restore();
	}
	function drawmin(m){
	    ctx.save();
	    var rad=2*Math.PI/60*m;
	    ctx.rotate(rad);
	    ctx.beginPath();
	    ctx.lineWidth=2.5*rem;
	    ctx.lineCap="round";
	    ctx.moveTo(0,10*rem);
	    ctx.lineTo(0,-r+40*rem);
	    ctx.stroke();
	    ctx.restore();
	}
	function drawsec(s){
	    ctx.save();
	    var rad=2*Math.PI/60*s;
	    ctx.rotate(rad);
	    ctx.beginPath();
	    ctx.fillStyle="red";
	    ctx.moveTo(-3*rem,20*rem);
	    ctx.lineTo(2*rem,20*rem);
	    ctx.lineTo(1*rem,-r+18*rem);
	    ctx.lineTo(-1*rem,-r+18*rem);
	    ctx.fill();
	    ctx.restore();
	}
	function drawdot(){
	    ctx.beginPath();
	    ctx.arc(0,0,4*rem,0,2*Math.PI);
	    ctx.fill();
	}
	function drawclock(){
	    ctx.clearRect(0,0,width,height);
	    var now=new Date()
	    var h=now.getHours();
	    var m=now.getMinutes();
	    var s=now.getSeconds();
	    drawpanel();//下面几个点顺序也很重要，要先执行面板的函数，再画其他的。因为上面写的函数画指针是基于原来的面板定位，而面板在一开始是重新定义了原点。
	    drawhour(h,m);
	    drawmin(m);
	    drawsec(s);
	    drawdot();
	    ctx.restore();
	    // console.log(1)
	}
	// drawclock();
	setInterval(function aa(){
		drawclock()
	},1000);
}