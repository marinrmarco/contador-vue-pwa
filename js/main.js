const app = Vue.createApp({
    data(){
        return{
            title: "Contador App - Vue",
            count: 0,
            limit: 1,
        };
    },
    methods:{
        modCount(instruction = "add", limit){
            if(instruction === "dis") this.count -= limit; 
            else this.count += limit;
        },
    },
});