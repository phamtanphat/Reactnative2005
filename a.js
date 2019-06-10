

const teo = {
    name : "Teo",
    age : 10,
    sayhello : function(){
        return this.name + " xin chao"
    }
}
const ti = teo.sayhello
console.log(ti.bind(teo)());