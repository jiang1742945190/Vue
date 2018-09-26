new Vue({
    el:"#app",
    data:{
        text:"待办事项",
        btn:"添加",
        num:"",
        arrs:[{txt:"今天",btn2:"删除"}],
 
    },
    methods:{
        fun:function(){
            this.num=document.querySelector("input").value;
            this.arrs.push({txt:this.num,btn2:"删除"});
            console.log(this.arrs)
        },
        fun2:function(index){
            this.arrs.splice(index,1);
        }
    },

})