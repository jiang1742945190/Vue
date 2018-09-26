var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();



new Vue({
    el:"#app",
    data:{
      arrs:[{time:"",txt:"春秋花月何时了？往事知多少。小楼昨夜又东风，故国回首月明中.",txtt:"",num:"新建笔记",}],

        xin:"新建笔记"
    },
    methods:{

        btn:function(){
            this.num=document.querySelector(".inpu").value;
             this.arrs.push({txt:this.num,time:year+"."+month+"."+day+"."+hour+"."+minute});
            document.querySelector("textarea").focus();
            localStorage.setItem('arrs',JSON.stringify(this.arrs));

        },

        btn2:function(index){
            this.arrs.splice(index,1);
            localStorage.setItem('arrs',JSON.stringify(this.arrs));
        }

    },
    created:function(){
        //浏览器打开的时候赋值本地存储的值

        this.arrs = JSON.parse(localStorage.getItem('arrs'));




    },
})