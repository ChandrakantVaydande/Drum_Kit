let a = document.querySelectorAll("button")
a.forEach((e) => {
    e.addEventListener("click", function () {
        var buttontext = this.innerHTML
        Makesound(buttontext)
    })
})

document.addEventListener("keypress", function (p) {
    Makesound(p.key)
})

function Makesound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/Tom1.mp3")
            tom1.play()
            break;

        case "a":
            var tom1 = new Audio("")
            tom1.play
            break;

        case "s":
            var tom1 = new Audio("")
            tom1.play
            break;

        case "d":
            var tom1 = new Audio("")
            tom1.play
            break;

        case "j":
            var tom1 = new Audio("")
            tom1.play
            break;

        case "k":
            var tom1 = new Audio("")
            tom1.play
            break;

        case "l":
            var tom1 = new Audio("")
            tom1.play
            break;

    }
}