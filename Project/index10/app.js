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
            var max = 10;
            var min = 3;
            var dmg = Math.max(Math.floor((Math.random() * max)) + 1, min);
            this.monsterHealth -= dmg;

            if (this.monsterHealth <= 0) {
                alert('You won!');
                this.isGameRunning = false;
                return;
            }

            max = 12;
            min = 5;
            var dmg = Math.max(Math.floor((Math.random() * max)) + 1, min);
            this.playerHealth -= dmg;


            if (this.playerHealth <= 0) {
                alert('You lost!');
                this.isGameRunning = false;
                return;
            }
        },
        specialAttack: function () {

        },
        heal: function () {

        },
        giveUp: function () {
            this.isGameRunning = false;
        }
    }

})