new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameRunning: false
    },
    methods: {
        startGame: function () {
            this.isGameRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            //var damage = this.calculcateDamage(3,10);
            this.monsterHealth -= this.calculcateDamage(3, 10);;

            if (this.checkWin())
                return;

            this.playerHealth -= this.calculcateDamage(5, 12);

            this.checkWin()
        },
        specialAttack: function () {

        },
        heal: function () {

        },
        giveUp: function () {
            this.isGameRunning = false;
        },
        calculcateDamage: function (min, max) {
            return Math.max(Math.floor((Math.random() * max)) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.isGameRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.isGameRunning = false;
                }
                return true;
            }
            return false;
        }
    }

})