function lightmode(){
    var wrapper = document.querySelectorAll(".wrapper");
    console.log("get all elements that have \"wrapper\" as a class")
    console.log(wrapper);

    for (element in wrapper) {
        if (element.classList.contains("lightmode")) {
            console.log("Success!!")
        }
        else if (element.classList.contains("darkmode")) {
            console.log("Success the Second!!")
        }
        /*else {
            console.error("One or more Elements do not have \"darkmode\" or \"lightmode\" in their class")
        }*/
    }
}