/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/

let hrefx = location.href;
let protocolx = location.protocol;
let hostx = location.host;
let portx =location.port;
let hostnamex= location.hostname;

let appnamex=navigator.appName;
let appversionx=navigator.appVersion;
let platformx=navigator.platform;
let languagex=navigator.language;
let cookieenabledx=navigator.cookieEnabled;

let heightx= screen.height;
let widthx= screen.width;
let pixelDepthx=screen.pixelDepth;

let lengthx =history.length;
let statex= history.state;




// Define UI Variables  here 
let badges=document.querySelectorAll(".badge")
badges[0].innerText=hrefx;
badges[1].innerText=protocolx;
badges[2].innerText=hostx;
badges[3].innerText=portx;
badges[4].innerText=hostnamex;
badges[5].innerText=appnamex;
badges[6].innerText=appversionx;
badges[7].innerText=platformx;
badges[8].innerText=languagex;
badges[9].innerText=cookieenabledx;
badges[10].innerText=heightx;
badges[11].innerText=widthx;
badges[12].innerText=pixelDepthx;
badges[13].innerText=lengthx;
badges[14].innerText=statex;









// Display the BOM Information on the innerHTML of the elements