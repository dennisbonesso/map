//map com argThis//

//objeto com o fator
const fator={
  valor:2
}

//array de numeros 
const arr1=[1,2]

//função que multiplica os numeros pelo fator
function mapComThis(arr,thisArg){
  return arr.map(function(item){
    return item*this.valor
  },thisArg)
}

//map sem argThis

const arr2=[1,2]

//função sem argThis
function mapSemThis(arr){
  return arr.map(item =>item*2)
}