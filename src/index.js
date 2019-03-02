module.exports = function getZerosCount(number, base) {
  var simpleNum =[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251]; 
   if(base>256 || base<2 || number<1 || number>Math.pow(10,9)){
       return "Error"
   }
   
   for(var i=0;i<=simpleNum.length;i++){
     if(base==simpleNum[i]){
         var simpleResult=0;
         for(var k=1;k<30;k++){
         var res = Math.floor(number/Math.pow(base,k));
         //alert("res="+res);
         if(res>0){
         simpleResult += res;
         }
         else{return simpleResult;}
         }
        return simpleResult;
     }
   }
   
    if(base%2===0){
       while(base%2===0){
           base/=2;
           if (base==2){
               break;
           }
       }
    }
    getSimpleNum(base,simpleNum);
    if(base==3){
        base==3;
    }
    else if(base%3===0){
       while(base%3===0){
           base/=3;
           if (base==3){
               break;
           }
       }
    }
    getSimpleNum(base,simpleNum);
    if(base==5){
        base==5;
    }
    else if(base%5===0){
       while(base%5===0){
           base/=5;
           if (base==5){
               break;
           }
       }
    }
    getSimpleNum(base,simpleNum);
    if(base==7){
        base==7;
    }
    else if(base%7===0){
       while(base%7===0){
           base/=7;
           if (base==7){
               break;
           }
       }
    }
    getSimpleNum(base,simpleNum);
    if(base==11){
        base==11;
    }
    else if(base%11===0){
       while(base%11===0){
           base/=11;
           if (base==11){
               break;
           }
       }
    }
    getSimpleNum(base,simpleNum);
    if(base==13){
        base==13;
    }
    else if(base%13===0){
       while(base%13===0){
           base/=13;
           if (base==13){
               break;
           }
       }
    }
    getSimpleNum(base,simpleNum);
  
   //alert(base);
   var result=0;
         for(var l=1;l<30;l++){
         var res1 = Math.floor(number/Math.pow(base,l));
         //alert("res="+res);
         if(res1>0){
         result += res1;
         }
         else{return result;}
         }
        return result;
   
   function getSimpleNum(num,arr){
    for(var i=0;i<=arr.length;i++){
        if(num==arr[i]){
            return num;
        }
    }
}

}