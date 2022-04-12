var count=0;
function addpop() {
    document.getElementById("popup").style.display = "block"

    document.getElementById("trip").style.display = "none"
    document.getElementById("blur").style.filter="blur(6px)"

}

const tasklist = [] 
const addlist = () => {

    document.getElementById("popup").style.display = "none"
    const name = document.getElementById("card").value; 

    console.log(name);  

    const tempObj = {
            taskName: name
        } 

    tasklist.push(tempObj)
    console.log(tasklist)

    addtaskonscreen()  
}

let closePopup=()=>{
    if(count===0){
        document.getElementById("trip").style.display = "flex"  
    }
    document.getElementById("popup").style.display="none" 
    document.getElementById("blur").style.filter="blur(0px)"
}

function addtaskonscreen() {
    const element = document.createElement("div");
    element.setAttribute("class", "child");

    element.innerText = tasklist[tasklist.length - 1].taskName;
    const existingelement = document.getElementById("parent");
    existingelement.appendChild(element);
    document.getElementById("blur").style.filter="blur(0px)"

    count++;
}