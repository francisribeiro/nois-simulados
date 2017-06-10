<template>
    <div class="Countdown">
        <div class="block">
            <p class="digit">{{total}} : {{ seconds | two_digits }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Countdown', 

    mounted() {
        window.setInterval(() => {
            this.total++;
        }, 1000);
    },

    data() {
        return {
            total:0,
            minutes:0,
            hours:0
        }
    },

    computed:{
        seconds(){
            return this.total;
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
    color: #000000;
    font-size: 20px;
    font-weight: 40;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
}

.digit {
    color: #000000;
    font-size: 20px;
    font-weight: 100;
    margin: 10px;
    text-align: center;
}
</style>
