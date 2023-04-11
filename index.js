//QUESTION NO. 1

// function add(a){
//     return (b) => {
//         console.log(a+b);
//     }
// }
// let adds = add(5);
// adds(8);

//QUESTION NO. 2



// let checkout = 0;
//     let numArray = ["1","2","3","4","5","6"];
//     newNumber = prompt("Enter value to check in array:");
//     checkArray(newNumber);
//     function checkArray(number) {
//         for (let index = 0, check = 0; index < numArray.length && check==0; index++) {
//             if (number == numArray[index]) {
//                 check = 1;
//                 checkout = check;
//                 console.log("true");
//             }
//         }
//         if (checkout == 0) {
//             console.log("false");
//             newNumber = prompt("Number is'nt present. Please enter new value:")
//             checkArray(newNumber);
//         }
//     }


                                    


//QUESTION NO. 3 

// function addPara(data){
//    let para = document.createElement("p");
//     para.setAttribute("id" , "para");
//     para.innerText = data;
//     document.body.appendChild(para);
// }

// addPara("hello world");



//QUESTION NO. 4

// function addList(data){
//        let unorderedList = document.createElement("ul");
//        let list = document.createElement("li");
//         document.body.appendChild(unorderedList);
//         unorderedList.appendChild(list);
//         list.innerText = data;
//     }

// addList("hello world");



//QUESTION NO. 5

// function colorHtml(htmlTag , color){
//     let element = document.createElement(htmlTag);
//     element.innerText = "Hello";
//     document.body.appendChild(element);
//     element.style.backgroundColor = color;
// }

// colorHtml("h1", "red");



//QUESTION NO. 6

// function saveObjToLocalStorage(key, obj) {
//   let stringify =  JSON.stringify(obj)
//   localStorage.setItem(key, stringify);
// }
// saveObjToLocalStorage("name" , "Ohad");
// saveObjToLocalStorage("RollNo" , "123");

// SIR NHI ARHA SAMJ SAVE TO HWA PAR AS A OBJECT NHI HWA AS COMPLETE STRING HWA. :(


