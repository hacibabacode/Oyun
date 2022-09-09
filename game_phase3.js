
function Game() {

    const cards = document.querySelectorAll('.card');



    let hasFlippedCard = false;  // CLOSURES
    let lockBoard = false;    // CLOSURES
    let firstCard, secondCard;    // CLOSURES



    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        console.log(this.id);
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;

            return;
        }

        hasFlippedCard = false;
        secondCard = this;

        console.log(firstCard.children[0].alt)
        console.log(secondCard.children[0].alt)

        if (firstCard.children[0].alt === secondCard.children[0].alt) {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard)

            var endGameCheck = 0;

            cards.forEach(card => {

                if (card.classList.value === "card") {

                }
                else{
                    endGameCheck = endGameCheck+1;
                }

            })

            if (endGameCheck===16) {
                stop();
                document.getElementById("start").innerHTML = "Start";
            }

            ResetImage();
        }
        else {
            lockBoard = true;
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                ResetImage();
                lockBoard = false;
            }, 1200);
        }


    }

    function ResetImage() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null]
    }

    (function shuffle() {
        Mix();
    })();

    //cards.forEach(card => card.addEventListener('click', console.log(this)))
    cards.forEach(card => card.addEventListener('click', flipCard))


    function showOrHide(params) {
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {

            if (this.textContent === 'Show All' && card.classList.value === "card") {

                card.classList.add('flip');
            }
            if (this.textContent === 'Hide' && card.classList.value !== "card") {

                card.classList.remove('flip');
            }
        })

        if (this.textContent === 'Hide') {
            this.textContent = 'Show All';
        }
        else {
            this.textContent = 'Hide';
        }
    }

    async function Mix() {
        console.log('mix')
        const cards = document.querySelectorAll('.card');
        var array = [];

        function RepeatCheck(params) {

        }
        var repeatarray = [];
        function shuffle() {

            cards.forEach(card => {

                while (1) {
                    let randomPosition = Math.floor(Math.random() * 16);

                    if (repeatarray.includes(randomPosition) === false) {
                        repeatarray.push(randomPosition);
                        array.push({ id: randomPosition, src: card.children[0].alt });
                        card.style.order = randomPosition;
                        break;
                    }

                }

            });

        }
        await shuffle();
        array.sort(function (a, b) {
            return a.id - b.id;
        });
        console.log(array);
        var kontrol = await 0;
        var array2 = await [
            [{ id: null, src: '' }, { id: null, src: '' }, { id: null, src: '' }, { id: null, src: '' }],
            [{ id: null, src: '' }, { id: null, src: '' }, { id: null, src: '' }, { id: null, src: '' }],
            [{ id: null, src: '' }, { id: null, src: '' }, { id: null, src: '' }, { id: null, src: '' }],
            [{ id: null, src: '' }, { id: null, src: '' }, { id: null, src: '' }, { id: null, src: '' }]
        ];

        function forfunc() {
            for (let index1 = 0; index1 < 4; index1++) {
                for (let index2 = 0; index2 < 4; index2++) {
                    array2[index1][index2] = array[kontrol];
                    kontrol = kontrol + 1;
                }

            }
        }
        await forfunc();
        await console.log(array2);

    }

    document.getElementById("show").addEventListener("click", showOrHide);

    document.getElementById("mix").addEventListener("click", Mix);


    ////Kronometre --------------------------------------

    
    var x;    // CLOSURES
    var startstop = 0;    // CLOSURES

    function startStop() { /* Toggle StartStop */

        startstop = startstop + 1;

        if (startstop === 1) {
            start();
            document.getElementById("start").innerHTML = "Stop";
        } else if (startstop === 2) {
            document.getElementById("start").innerHTML = "Start";
            startstop = 0;
            stop();
        }

    }


    function start() {
        x = setInterval(timer, 10);
    } /* Start */

    function stop() {
        clearInterval(x);
    } /* Stop */

    var milisec = 0;
    var sec = 0; /* holds incrementing value */
    var min = 0;
    var hour = 0;

    /* Contains and outputs returned value of  function checkTime */

    var miliSecOut = 0;
    var secOut = 0;
    var minOut = 0;
    var hourOut = 0;

    /* Output variable End */


    function timer() {
        /* Main Timer */


        miliSecOut = checkTime(milisec);
        secOut = checkTime(sec);
        minOut = checkTime(min);
        hourOut = checkTime(hour);

        milisec = ++milisec;

        if (milisec === 100) {
            milisec = 0;
            sec = ++sec;
        }

        if (sec == 60) {
            min = ++min;
            sec = 0;
        }

        if (min == 60) {
            min = 0;
            hour = ++hour;

        }


        document.getElementById("milisec").innerHTML = miliSecOut;
        document.getElementById("sec").innerHTML = secOut;
        document.getElementById("min").innerHTML = minOut;
        document.getElementById("hour").innerHTML = hourOut;

    }


    /* Adds 0 when value is <10 */


    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function reset() {


        /*Reset*/

        milisec = 0;
        sec = 0;
        min = 0
        hour = 0;

        document.getElementById("milisec").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
        document.getElementById("min").innerHTML = "00";
        document.getElementById("hour").innerHTML = "00";

    }


    document.getElementById("start").addEventListener("click", startStop);
    document.getElementById("reset").addEventListener("click", reset);

}






Game();  