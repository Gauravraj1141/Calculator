let buttons = document.querySelectorAll("button")

let screen = document.getElementById("screen")

Array.from(buttons).forEach((button) => {
    // we add events on all buttons 
    button.addEventListener("click", (e) => {
        let buttondata = e.target.innerText
  
        // if buttondata me = nhi h to hi isme add kro  ni to mat kro 
        if (!buttondata.includes("=")) {
            screen.value += buttondata
        }

        // now we add event on equal button  and add methods for operation. 
        let equalbtn = document.getElementById("equal")
        equalbtn.addEventListener("click", () => {

            // we use eval function it will done flying claculation  it will calculate all the functions 
            screen.value = eval(screen.value)

        })

    })
})

// here we add event on all clear button 
let ac = document.getElementById("ac")
ac.addEventListener("click", () => {
    screen.value = "";
})

// here we add event on clear button 
let c = document.getElementById("c")
c.addEventListener("click", () => {
    let clear = screen.value;
    clear = clear.slice(0, clear.length-2)
    screen.value = clear
})



