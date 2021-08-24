const promise = new Promise((resolve, reject) => {
    

})

let promise2 = new Promise((resolve, reject) => {
setTimeout(() => resolve(`Siemka`),15000)

}).then((res) => { console.log(res) }).catch((e) => console.log('error', e))



let promise3 = new Promise((resolve, reject) => {
setTimeout(() => reject(`błąd`),15000)

}).then((res) =>{console.log(res)}).catch((e) => console.log('error',e))