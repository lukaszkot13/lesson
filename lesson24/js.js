// const imieDiv = document.getElementById('imie')

// function pobierzImie(index) {
//     const imiona = [`Agnieszka`,`Marcin`, `Bartek`,`Agata`,`Mateusz`,`Łukasz`]

//     imieDiv.innerHTML = "Loading....."
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(imiona[index]),5000)
//     })
// }
// const promise = pobierzImie()
    
    
//     promise.then((response) => {
//         imieDiv.innerHTML = `Cześć ${response}`
//     })

// function Promise2() {
//     this.then = () => {
//             console.log('then')
//         } 
// }
// const fakePromise = new Promise2()
    
// fakePromise.then()


// DALSZA CZĘŚĆ !!!!!
async function moja() {

    function pobierzImie(index) {
        const imiona = [`Agnieszka`, `Marcin`, `Bartek`, `Agata`, `Mateusz`, `Łukasz`]

        return new Promise((resolve) => {
            setTimeout(() => resolve(imiona[index]), 5000)
        })
    }

    Promise.all([pobierzImie(2), pobierzImie(4), pobierzImie(5)])
        .then((response) => console.log(response))

    // const imie1 = await pobierzImie(2)
    // console.log('Imie1', imie1)

    //  const imie2 = await pobierzImie(4)
    // console.log('Imie2', imie2)

    //  const imie3 = await pobierzImie(5)
    // console.log('Imie3',imie3)

}

moja()


// // SA 2 SPOSOBY WYKONANIA     

// // 1

// const promis1 = pobierzImie(2)
// const promis2 = pobierzImie(4)
// const promis3 = pobierzImie(5)

// Promise.all([promis1,promis2,promis3])

// // W obu przypadkach znaczenie jest takie same

// //2

// Promise.all([pobierzImie(2), pobierzImie(4), pobierzImie(5)])
//         .then((response) => console.log(response))




//         // TEN PODSPODEM JEST NIE WŁAŚCIWY BO KAŻDE IMIE SYŚWIETLI SIE PO 5 SEKUNDACH
//     const imie1 = await pobierzImie(2)
//     console.log('Imie1', imie1)

//      const imie2 = await pobierzImie(4)
//     console.log('Imie2', imie2)

//      const imie3 = await pobierzImie(5)
//     console.log('Imie3',imie3)


// Można wykonać to zeby od razu wyswietlał sie 

// // const promis1 = pobierzImie(2)
// promis1.then(response => {console.log('Imie 1 ', response)})
// // const promis2 = pobierzImie(4)
// promis2.then(response => {console.log('Imie 2 ', response)})
// // const promis3 = pobierzImie(5)
// promis3.then(response => {console.log('Imie 3 ', response)})