// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Document</title>
// </head>
// <body>
//     <div class="header">
//     </div>
//     <section id="container">
//         <ul>
//             <li class="first">one</li>
//             <li class="second">two</li>
//             <li class="third">three</li>
//         </ul>
//         <ol>
//             <li class="first">one</li>
//             <li class="second">two</li>
//             <li class="third">three</li>
//         </ol>
//     </section>
//     <div class="footer">
//     </div>
// </body>
// </html>

~~

1. document.getElementById("container")
2. document.querySelector("#container")
3. document.getElementsByClassName("second")
4. const ol = document.querySelector("ol");
	ol.getElementsByClassName("third")
5. const container = document.getElementById("container");
    container.innerText = "Hello!"
6. const div = document.getElementsByClassName("footer");
    div.classList.add("class", "main")
7. div.classList.remove("main")
8. const newLi = document.createElement("li")
9. newLi.innerText = "four"
10. const ul = document.querySelector("ul");
    ul.append(NewLi)
11. const allLi = document.querySelectorAll("ol li");
    for(let li of allLi){
        li.style.backgroundColor = "green"
    }
12. div.setAttribute("class", "remove-me");
    const removeMe = document.querySelector("#remove-me");
    removeMe.remove()