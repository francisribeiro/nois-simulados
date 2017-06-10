<template>
    <div class="Countdown">
        <span class="text">Tempo decorrido:
            <p class="digit">{{hours | two_digits}} : {{minutes | two_digits}} : {{ seconds | two_digits }}</p>
        </span>
    </div>
</template>

<script>
export default {
    name: 'Countdown',

    mounted: function () {
        window.setInterval(() => {
            this.total++;

            if (this.time >= 59)
                this.time = 0;
            else
                this.time++;

            this.$store.state.setTempo(this.total);
        }, 1000);
    },

    data: function () {
        return {
            total: 0,
            time: 0
        }
    },

    computed: {
        seconds: function () {
            return this.time;
        },

        minutes: function () {
            return parseInt(this.total / 60);
        },

        hours: function () {
            return parseInt(this.total / 3600);
        }
    }
}
</script>

<style>
.block {
    display: flex;
    flex-direction: column;
    margin: 20px;
}

.text {
    color: #FF8C00;
    font-size: 30px;
    font-weight: 40;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
}

.digit {
    color: #228B22;
    font-size: 40px;
    font-weight: 100;
    margin: 10px;
    text-align: center;
}
</style>
