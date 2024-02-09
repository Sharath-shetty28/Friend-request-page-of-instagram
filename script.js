var st = document.querySelector("h5")

var add = document.querySelector("#add")

var close = document.querySelector("#close")

var img = document.querySelector("img")

close.style.display = "none";

var flag = 0

add.addEventListener("click", function () {
    if (flag == 0) {
        alert("Want to send a request ?")
        add.innerHTML = "requested"
        add.style.background = "#A9A9A9"
        add.style.color = "black"
        flag = 1
        setTimeout(() => {
            st.innerHTML = "Friends"
            st.style.color = "#22bb43"
            add.innerHTML = "unfollow"
            close.style.display = "block"

        }, 4500);
    }
    else {
        alert("Do you want to unfollow ?")
        st.innerHTML = "Stranger"
        st.style.color = "red"
        add.innerHTML = "Follow"
        add.style.background = "#34a1eb";
        add.style.color = "#EEEEEE"
        close.style.display = "none"
        img.style.background = "transparent";
        flag = 0
    }
})
var check = 0
close.addEventListener("click", function () {

    if (check == 0) {
        img.style.background = "#0eeb3e";
        img.style.padding = "5px"
        close.innerHTML = "Remove"
        close.style.margin = "14px 19px"
        close.style.padding = "15px 123px"
        close.style.background = "#3dd15e"
        check = 1
    }
    else {
        img.style.background = "transparent";
        img.style.padding = "0px"
        close.innerHTML = "Close friend"
        close.style.padding = "15px 106px"
        close.style.background = "#0eeb3e";
        check = 0
    }
})

