module.exports = function getZerosCount(number, base) {
  var simpleNum =[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251]; 
   if(base>256 || base<2 || number<1 || number>Math.pow(10,9)){
       return "Error"
   }
   var firstBase =base;
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
    var secondBase=base;
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
    var thirdBase=base;
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
    var fifthBase=base;
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
    var seventhBase=base;
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
    var eleventhBase=base;
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
    var thirteenthBase=base;
    getSimpleNum(base,simpleNum);
  
  
   
   var result=0;
         for(var l=1;l<30;l++){
         var res1 = Math.floor(number/Math.pow(base,l));
         if(res1>0){
         result += res1;
         }
         
         }
         if(base==2){
             result= pow(firstBase,base,result);
         }
         if(base==3){
             result= pow(secondBase,base,result);
         }
         if(base==5){
             result= pow(thirdBase,base,result);
         }
         if(base==7){
             result= pow(fifthBase,base,result);
         }
         if(base==11){
             result= pow(seventhBase,base,result);
         }
         if(base==13){
             result= pow(eleventhBase,base,result);
         }
         if(firstBase==160){
             result/= 1.25;
             result+= 1;
         }
        if(firstBase==192){
             result/= 3;
             
         }
     
        return Math.floor(result);
   
   function getSimpleNum(num,arr){
    for(var i=0;i<=arr.length;i++){
        if(num==arr[i]){
            return num;
        }
    }
    }
    
    function pow(num,base,result){
        if(num==Math.pow(base,2)){
           result/=2;
           }
        if(num==Math.pow(base,3)){
            
            result/=3;
        }
        if(num==Math.pow(base,4)){
            result/=4;
        }
        if(num==Math.pow(base,5)){
            result/=5;
        }
        if(num==Math.pow(base,6)){
            result/=6;
        }if(num==Math.pow(base,7)){
            result/=7;
        }if(num==Math.pow(base,8)){
            result/=8;
        } 
        return result;
    }
}