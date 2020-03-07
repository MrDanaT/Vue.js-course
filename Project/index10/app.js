new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.isGameRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            const damage = this.calculcateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: `Player hits Monster for ${damage}`
            });
            if (this.checkWin())
                return;
            this.monsterAttacks();
        },
        specialAttack: function () {
            const damage = this.calculcateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: `Player specialhits Monster hard for ${damage}`
            });
            if (this.checkWin())
                return;
            this.monsterAttacks();
            this.checkWin()
        },
        heal: function () {
            const amount = 10;
            if (this.playerHealth <= 90)
                this.playerHealth += amount;
            else { this.playerHealth = 100; } 
            this.turns.unshift({
                isPlayer: true,
                text: `Player heals for ${amount}`
            });
            this.monsterAttacks();
        },
        giveUp: function () {
            this.isGameRunning = false;
        },
        calculcateDamage: function (min, max) {
            return Math.max(Math.floor((Math.random() * max)) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                this.newGameDialogue('won');
                return true;
            } else if (this.playerHealth <= 0) {
                this.newGameDialogue('lost');
                return true;
            }
            return false;
        },
        newGameDialogue: function (text) {
            if (confirm(`You ${text}! New Game?`)) {
                this.startGame();
            } else {
                this.isGameRunning = false;
            }

        },
        monsterAttacks: function () {
            const damage = this.calculcateDamage(5, 12);
            this.playerHealth -= damage;
            this.checkWin();

            this.turns.unshift({
                isPlayer: false,
                text: `Monster hits Player for ${damage}`
            });
        }
    }

})