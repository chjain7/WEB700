/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Chahat Jain  Student ID: 177139219  Date: Jan 19 2023
*
********************************************************************************/ 




var serverVerbs   =   ["GET","GET","GET","POST","GET","POST"];
var serverPaths   =   ["/","/about","/contact","/login","/panel","/logout"];
var serverResponses   =   ["Welcome to WEB700 Assignment 1","This assignment was prepared by Chahat Jain","Chahat Jain : 177139219","User Logged In","Main Panel","Logout Complete"]; 

let k;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }


// This function will take the input and check if it present in the serverVerbs array 
var httpRequest =   function(httpVerb ,path){
    for (let i = 0; i < serverVerbs.length; i++){
        if(serverVerbs[i]==httpVerb && serverPaths[i]==path ){ 
            // if it matches the index in the ServerPath then print the corresponding output                       
            return "200: " +serverResponses[i]
        }        
     }
     // if it does not matches then just output the error message with parameters passed
     return "404: Unable to process "+httpVerb+" request for " +path
        
 } 



var automateTests   =   function (){
   
    var testVerbs = [ "GET", "POST"];
    var testPaths = [ "/", "/about", "/contact","/login", "/panel","/logout","/randompath1","/randompath2"];
    
   var randomRequest    =  function  (){
        randVerb=getRandomInt(0,1)
        randPath=getRandomInt(0,7)
        console.log(httpRequest(testVerbs[randVerb],testPaths[randPath]))
    }
    
    setInterval(randomRequest,1)
}

automateTests()
