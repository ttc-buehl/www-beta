'use strict';

(function () {
    var countdowns = []
    function findCountdowns() {
        var elements = document.querySelectorAll('.countdown')
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i]
            countdowns.push(el)
        }
    }

    function updateCountdowns() {
        var current = +new Date()
        for (var i = 0; i < countdowns.length; i++) {
            var countdown = countdowns[i]
            var target = +new Date(countdown.dataset.target)
            var delta = Math.floor((target - current) / 1000)
            var days = Math.floor(delta / (60 * 60 * 24))
            var hours = Math.floor((delta % (24 * 60 * 60)) / (60 * 60))
            var minutes = Math.floor((delta % (60 * 60)) / 60) % 60
            var seconds = delta % 60

            var text = ""
            if (days > 0) {
                text += days + " Tage, "
            }

            if (days > 0 || hours > 0) {
                text += hours + " Stunden, "
            }

            if (days > 0 || hours > 0 || minutes > 0) {
                text += minutes + " Minuten, "
            }

            if (days > 0 || hours > 0 || minutes > 0 || seconds > 0) {
                text += seconds + " Sekunden"
            }

            if (delta > 0) {
                countdown.textContent = text;
            } else {
                countdown.style.visibility = "hidden"
            }
        }
    }
    findCountdowns()
    updateCountdowns()
    setInterval(updateCountdowns, 1000)
})()