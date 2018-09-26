new Vue({
    el:"#app",
    data:{
        arrs:""
    },
    mounted:function(){

        this.$http.get('json/data.json').then(function(res){
            console.log(res.body);
            this.arrs = res.body;

        },function(){
            console.log('请求失败处理');
        });
    },
    methods:{
        btn:function(a,s){
            this.arrs[a][s].bool = !this.arrs[a][s].bool;
        }
    },

});

var span = document.querySelector(".zuo span");
var p = document.querySelector(".zuo .er");
var i = document.querySelector(".zuo i");
  span.onclick=function(){
            if(p.style.display==="block"){
                p.style.display="none"
                i.setAttribute("class","fa fa-caret-up")
            }else{
                p.style.display="block";
                i.setAttribute("class","fa fa-caret-down");
            }
        }

