<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <button @click="show = !show" class="btn btn-primary">Show Alert</button>
                <br><br>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-show="show">This is some info 1</div>
                </transition>
                <transition name="fade" type="animation">
                    <div class="alert alert-info" v-if="show">This is some info 2</div>
                </transition>
                <transition
                        appear enter-active-class="animated bounce"
                        enter-class=""
                        leave-active-class="animated shake"
                        leave-class="">
                    <div class="alert alert-info" v-if="show">This is some info3</div>
                </transition>
                <hr>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" key="info" v-if="show">This is some info 4</div>
                    <div class="alert alert-warning" key="warning" v-else>This is some info 4</div>
                </transition>
                <br><br><br>
                <hr>
                <button @click="load = !load" class="btn btn-primary">Load/ Remove elmenet</button>
                <br><br>
                <transition
                        @after-enter="afterEnter"
                        @after-leave="afterLeave"
                        @before-enter="beforeEnter"
                        @before-leave="beforeLeave"

                        @enter="enter"
                        @enter-cancelled="enterCancelled"
                        @leave="leave"
                        @leave-cancelled="leaveCancelled"
                        :css="false">
                    <div style="width: 300px; height: 100px; background-color: #76ff7e" v-if="load"></div>
                </transition>
                <hr>
                <button @click="selectedComponent == 'app-succes-alert' ? (selectedComponent = 'app-danger-alert') : (selectedComponent = 'app-succes-alert')"
                        class="btn btn-primary">
                    Toggle Components
                </button>
                <br>
                <transition mode="out-in" name="fade">
                    <component :is="selectedComponent"></component>
                </transition>
                <button @click="addItem" class="btn btn-primary">Add Item</button>
                <button @click="sortNumbers" class="btn btn-primary">Sort List</button>
                <br><br>
                <ul class="list-group">
                    <transition-group name="fade">
                        <li :key="number" @click="removeItem(idx)" class="list-group-item"
                            style="cursor: pointer"
                            v-for="(number, idx) in numbers">{{number}}
                        </li>

                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import SuccesAlert from "./SuccesAlert.vue";
    import DangerAlert from "./DangerAlert.vue";

    export default {
        data() {
            return {
                show: true,
                alertAnimation: 'fade',
                load: true,
                elementWidth: 100,
                selectedComponent: 'app-succes-alert',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            beforeEnter(el) {
                console.log('beforeEnter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                console.log('enter');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;

                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterEnter(el) {
                console.log('afterEnter');
            },
            enterCancelled(el) {
                console.log('enterCancelled');
            },
            beforeLeave(el) {
                console.log('beforeLeave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                console.log('leave');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;

                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log('afterLeave');
            },
            leaveCancelled(el) {
                console.log('leaveCancelled');
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1);
            },
            removeItem(idx) {
                this.numbers.splice(idx, 1);
            },
            sortNumbers() {
                this.numbers.sort();
            }
        },
        components: {
            appSuccesAlert: SuccesAlert,
            appDangerAlert: DangerAlert
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {
        /*opacity: 1;*/
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    .fade-move {
        transition: transform 1s;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 500ms;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
