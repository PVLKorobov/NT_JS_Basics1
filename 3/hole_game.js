document.addEventListener("DOMContentLoaded", () => {
    var counterDead = document.getElementById("dead");
    var counterLost = document.getElementById("lost");


    var getHole = function (index) {
        return document.getElementById(`hole${index}`);
    }

    var checkStats = function () {
        if (Number(counterDead.textContent) >= 10) {
            alert("Победа!");
            counterDead.textContent = counterLost.textContent = 0;
        }
        else if (Number(counterLost.textContent) >= 5) {
            alert("Поражение!");
            counterDead.textContent = counterLost.textContent = 0;
        }
    }
    
    var goodClick = function () {
        self.onclick = () => {
            clearInterval(shuffleInterval);

            counterDead.textContent = Number(counterDead.textContent) + 1;
            checkStats();
            shuffle();

            shuffleInterval = setInterval(shuffle, 800)
        }
    }

    var badClick = function () {
        self.onclick = () => {
            counterLost.textContent = Number(counterLost.textContent) + 1;
            checkStats();
        }
    }

    var shuffle = function () {
        holes = document.getElementsByClassName("hole")
        for (var hole of holes) {
            hole.onclick = badClick;
            if (hole.className == "hole hole_has-mole") { hole.className = "hole"; }
        }
        var index = ~~(Math.random() * 9 + 1);
        newActive = getHole(index);
        newActive.className = "hole hole_has-mole";
        newActive.onclick = goodClick;
    }

    var shuffleInterval = setInterval(shuffle, 800)
})