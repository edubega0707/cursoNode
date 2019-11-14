c
//--------------------KATA 1------------------------//
function invert(array) {
   return array.map((item)=>(item<0)?item*-1:item*-1)
}


//-----------------KATA2-----------------------------//

function countSheeps(arrayOfSheep) {
   return arrayOfSheep.filter(x=>x).length
}

//--------------KATA 3--------------------------//
return arr.filter((item)=>true)


//--------------KATA 4-------------------//
function strCount(str, letter){  
  let countLetter=0
  let array=str.split("")
  return array.filter(ltr=>ltr===letter?countLetter+1:null).length

}

//------------------------KATA 5------------------
function getNames(data){
  return data.map(function(item){return item.name});
}


//------------------KATA 6---------------------------------//

const whosOnline = (friends) => {
  
let output={
  }
  let online=[]
  let arrayaway=[]
  let offline=[]

  friends.map((friend)=>{
    if(friend.status==="online" && friend.lastActivity>10){
        arrayaway.push(friend.username)
        return output.away=arrayaway
    }
    else if(friend.status==="online"){
        online.push(friend.username)
        return output.online=online
    }
    else
    {
        offline.push(friend.username)
        return output.offline=offline
    }
      
  })
  return output
}