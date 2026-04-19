//Conditionaltype - Using Function par, switch and If else

function launchbrowser(bname) {
       if (bname === "chrome") {
              console.log("Yes,it is chrome browser");      
       } else {
             console.log("It is",bname,"browser");       
       }
}
launchbrowser("Edge")

function Runtest(testtype){
       switch (true){
       case "Smoke":
              console.log("Smoke Testing");
           break; 
       case "Sanity":
              console.log("Sanity Testing");
           break; 
       case "Regression":
              console.log("Smoke Testing");
           break; 
       default:
              console.log(testtype,"Testing");  
       }
}
Runtest("Unit")