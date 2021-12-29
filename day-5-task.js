/*Question 1
 Do the below programs in anonymous function & IIFE

(a) Print odd numbers in an array-----------------------------------------------------------------------------------------------------------------------------------

Answer/code */
var odd=function (num){      //anonymous function which does not have a name
    var odd=[];                 //creating an empty array
      for(var i in num){           //for in loop
        if(num[i]%2!==0){            // if statement to check the condition
         odd.push(num[i]);             // odd.push to insert the value in num[i] to odd array
        }
      }     
    return odd;                           //returning odd array
    }; console.log(odd([1,2,3,4,5]));       // printing the output by function calling

//output [ 1, 3, 5 ]

(function (num){      //IIFE function which does not have a name
    var odd=[];                 //creating an empty array
      for(var i in num){           //for in loop
        if(num[i]%2!==0){            // if statement to check the condition
         odd.push(num[i]);             // odd.push to insert the value in num[i] to odd array
        }
      }     
    console.log(odd);                          //printing the odd array
    })([1,2,3,4,5])                              //function calling
//output [ 1, 3, 5 ]

/*
(b) Convert all the strings to title caps in a string array---------------------------------------------------------------------------------------------------------

Answer/code */

var string=function (str){                                   //using anonymous
    str=str.toLowerCase().split(" ");                               //converting the string to lowercase and spliting by space
    for(var value in str){                                               // for in loop      
       str[value]=str[value].charAt(0).toUpperCase(0)+str[value].slice(1);;//converting first letter of string to uppercase and concat them with remaining string
    }
    console.log(str.join(" "));                                                //joined the string and then print it
};string("hello SIR");            
//output Hello Sir                                             //function call


(function (str){                                               //using IIFE function
    str=str.toLowerCase().split(" ");
    for(var value in str){
       str[value]=str[value].charAt(0).toUpperCase(0)+str[value].slice(1);;
    }
    console.log(str.join(" "));
})("hello SIR");
//output Hello Sir 

/*
(c) Sum of all numbers in an array----------------------------------------------------------------------------------------------------------------------------------

Answer/code */

var sum=function(arr){                  //using anonymous
    let sum=0;                           // decalace sum=0
    for(var value in arr){                // for in loop
        sum+=arr[value];                   // adding arr element 
    }
    return sum;                              //return sum;
}; console.log(sum([10,20,30,40]));
//output 100

(function(arr){                              //using IIFE function
    let sum=0;
    for(var value in arr){
        sum+=arr[value];
    }
    console.log(sum);
}) ([10,20,30,40]);
//output 100

/*
(d) Return all the prime numbers in an array------------------------------------------------------------------------------------------------------------------------

Answer/code */

var prime=function(arr){         //using anonymous
    let prime=[];                 // decalring an emply array prime
    for(var value in arr){         // for in loop  
        if(arr[value]%2!==0){       // if condition to check the number is prime or not
            prime.push(arr[value]);  // pushing the prime number to prime array
        }
    }
    return prime;                        // return prime
}; console.log(prime([1,2,3,4,5,6,7,8,9,10])); //function call
//output [ 1, 3, 5, 7, 9 ]

(function(arr){                       //using IIFE function
    let prime=[];
    for(var value in arr){
        if(arr[value]%2!==0){
            prime.push(arr[value]);
        }
    }
    console.log(prime);
})([1,2,3,4,5,6,7,8,9,10]);
//output [ 1, 3, 5, 7, 9 ]

/*
(e) Return all the palindromes in an array--------------------------------------------------------------------------------------------------------------------------

Answer/code  */

var palindrome=function(arr){                  //using anonymous function
    let rev,pal=[];                        // decalre rev and pal array
    for(var i in arr){                                //for in loop    
        rev=String(arr[i]).split("").reverse().join("");     // reversing the string
            if(rev==arr[i]){                              // if condition to check the string is palindrome or not
                pal.push(arr[i]);                            //pushing the string to pal array
            }else{continue;}
    }console.log(pal);
}; palindrome(["madam",101,"tarat",123,"dope",121,151]);
//output [ 'madam', 101, 'tarat', 121, 151 ]

(function(arr){                  //using IIFE function
    let rev,pal=[];                        // decalre rev and pal array
    for(var i in arr){                                //for in loop    
        rev=String(arr[i]).split("").reverse().join("");     // reversing the string
            if(rev==arr[i]){                              // if condition to check the string is palindrome or not
                pal.push(arr[i]);                            //pushing the string to pal array
            }else{continue;}
    }console.log(pal);
})(["madam",101,"tarat",123,"dope",121,151]);
//output [ 'madam', 101, 'tarat', 121, 151 ]

/*
(f) Return median of two sorted arrays of same size----------------------------------------------------------------------------------------------------------------

Answer/code  */

 var median=function(arr1,arr2){     //using anonymous function
      arr1=[...arr1,...arr2];             // merging using spred operator
     arr1.sort((a, b) => a - b);            // sorting in asendng order
     let mid=arr1.length/2;                  // mid store midile index of array
     let median=(arr1[mid]+arr1[mid+1])/2;    //median using medain formula
     console.log(median)                        // printing
   }; median([10,2,3,4,5],[11,22,55,44,33]);     //function call
//output     16.5 

    (function(arr1,arr2){              //using IFFE function
      arr1=[...arr1,...arr2];
     arr1.sort((a, b) => a - b);
     let mid=arr1.length/2;
     let median=(arr1[mid]+arr1[mid+1])/2;
     console.log(median)
   })([10,2,3,4,5],[11,22,55,44,33]);
//output     16.5 

/*
(g) Remove duplicates from an array---------------------------------------------------------------------------------------------------------------------------------

Answer/code  */

 var duplicate=function(arr){         //using anonymous function
    for(var i in arr){                   // using for in loop
        for(var j in arr){                 
            if(arr[i]==arr[j] && i!=j){    //if condition to match element with next element
                arr.splice(j,1);             // splice to remove dublicate
            }
        }
    }
    console.log(arr);                           // printing
    };duplicate(["vaibhav","snehal","vaibhav"]);   //function call
    
//output[ 'snehal', 'vaibhav' ]

    (function(arr){                      //using IIFE function
    for(var i in arr){
        for(var j in arr){
            if(arr[i]==arr[j] && i!=j){
                arr.splice(j,1);
            }
        }
    }
    console.log(arr);
})(["vaibhav","snehal","vaibhav","vaibhav","snehal"]); 
//output[ 'snehal', 'vaibhav' ]

/*
(h) Rotate an array by k times--------------------------------------------------------------------------------------------------------------------------------------

Answer/code  */


/* Question 3
Do the below programs in arrow functions
(a) Print odd numbers in an array-----------------------------------------------------------------------------------------------------------------------------------

Answer/code */

var odd=(num) => {      //using arrow function 
    var odd=[];                 //creating an empty array
      for(var i in num){           //for in loop
        if(num[i]%2!==0){            // if statement to check the condition
         odd.push(num[i]);             // odd.push to insert the value in num[i] to odd array
        }
      }     
    return odd;                           //returning odd array
    }; console.log(odd([1,2,3,4,5]));
//output [ 1, 3, 5 ] 

/* 
(b) Convert all the strings to title caps in a string array---------------------------------------------------------------------------------------------------------

Answer/code */

var string=(str) => {                                   //using arrow function
    str=str.toLowerCase().split(" ");                               //converting the string to lowercase and spliting by space
    for(var value in str){                                               // for in loop      
       str[value]=str[value].charAt(0).toUpperCase(0)+str[value].slice(1);;//converting first letter of string to uppercase and concat them with remaining string
    }
    console.log(str.join(" "));                                                //joined the string and then print it
};string("hello SIR");            
//output Hello Sir

/* 
(c) Sum of all numbers in an array----------------------------------------------------------------------------------------------------------------------------------

Answer/code */

var sum=(arr) => {                  //using arrow
    let sum=0;                           // decalace sum=0
    for(var value in arr){                // for in loop
        sum+=arr[value];                   // adding arr element 
    }
    return sum;                              //return sum;
}; console.log(sum([10,20,30,40]));
//output 100

/* 
(d) Return all the prime numbers in an array------------------------------------------------------------------------------------------------------------------------

Answer/code */

var prime=(arr) => {         //using arrow
    let prime=[];                 // decalring an emply array prime
    for(var value in arr){         // for in loop  
        if(arr[value]%2!==0){       // if condition to check the number is prime or not
            prime.push(arr[value]);  // pushing the prime number to prime array
        }
    }
    return prime;                        // return prime
}; console.log(prime([1,2,3,4,5,6,7,8,9,10])); 
//output [ 1, 3, 5, 7, 9 ]

/* 
(e) Return all the palindromes in an array--------------------------------------------------------------------------------------------------------------------------

Answer/code */

var palindrome=(arr) => {                  //using anonymous function
    let rev,pal=[];                        // decalre rev and pal array
    for(var i in arr){                                //for in loop    
        rev=String(arr[i]).split("").reverse().join("");     // reversing the string
            if(rev==arr[i]){                              // if condition to check the string is palindrome or not
                pal.push(arr[i]);                            //pushing the string to pal array
            }else{continue;}
    }console.log(pal);
}; palindrome(["madam",101,"tarat",123,"dope",121,151]);
//output [ 'madam', 101, 'tarat', 121, 151 ]






