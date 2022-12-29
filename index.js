const inputUser = prompt('Введіть через кому(,) єлементи массиву')

if(inputUser !== null && inputUser.trim() !=='' ){
   const array = inputUser.split(" ").join("")
   const changeArray =array.split(",")
    const arrNumber = [];
   console.log(changeArray)
   for(let i = 0; i<changeArray.length;i++){
       if(!(isNaN(+changeArray[i])) && changeArray[i].trim() !==''){
           arrNumber.push(changeArray[i])
       }
       arrNumber.sort((a,b)=>{
           return a-b
       })
   }
    arrNumber.splice(2,3)
    document.querySelector('.out1').innerHTML = `[${arrNumber}]`
}else {
    alert('жаль що не ввели массив')
}
