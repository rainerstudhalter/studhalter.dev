<script lang="ts">
    import wait from 'wait';

    import { defaultDrawSpeed, defaultDrawPause } from './defaults';
    import { setAnimations, getAnimations } from '../context';

    import Svg from '../svg.svelte';

    import initialPaths from '../paths/nose/initial';
    import expandPaths from '../paths/nose/expand';
    const paths = initialPaths;

    export let id = undefined;
    let svg;
    let show = false;
    export let draw = true;
    let drawn = false;
    let nextBegin = 0;
    export let drawSpeed = defaultDrawSpeed;
    export let drawPause = defaultDrawPause;

    if (draw) {
        for (const path of Object.values(paths)) {
            path.dur = Math.floor(path.l * drawSpeed);
            path.begin = nextBegin + 0;
            nextBegin += path.dur + drawPause;
        }
    }

    export const initialDuration = 150;
    export const expandDuration = 150;
    export const blinkDuration = expandDuration + initialDuration;
    export const doubleBlinkDuration = blinkDuration * 2;
    export const showDuration = draw ? nextBegin - drawPause : 0;

    const animators = {
        'initial': {id: 'initial', paths: initialPaths, duration: initialDuration},
        'expand': {id: 'expand', paths: expandPaths, duration: expandDuration},
    }
    export let lastAnimationId = animators.initial.id;
    export let lastAnimationEndTime = new Date();
    export let lastBlinkTime = new Date();

    setAnimations();
    const animations = getAnimations();

    let animating = false;
    let waiting = false;
    const initialMinPauseDuration = 500;
    const animate = async (newAnimation, minPauseDuration) => {
        // wait for a running animation to finish
        if (animating) {
            waiting = true;
            while (animating) {
                await wait(10);
            }
            waiting = false;
        }
        // wait if there is already another animation waiting
        while (waiting) {
            await wait(10);
        }
        animating = true;
        
        // ensure a minimum pause between animations
        if (minPauseDuration == undefined) {
            minPauseDuration = initialMinPauseDuration;
            const missingPauseDuration = (new Date() - lastAnimationEndTime);
            if (missingPauseDuration < minPauseDuration) {
                await wait(minPauseDuration - missingPauseDuration);
            }
        }

        // execute the animation
        animations.push({from: animators[lastAnimationId].paths, to: newAnimation.paths, begin: svg.getCurrentTime()*1000, duration: newAnimation.duration});
        lastAnimationId=newAnimation.id.slice();
        await wait(newAnimation.duration);
        lastAnimationEndTime = new Date();
        animating = false; 
    }

    export const doShow = async () => {
        show = true;
        if (draw) {
            await wait(showDuration);
            while (svg.getCurrentTime()*1000 < showDuration) {
                await wait(10);
            }
        }
        drawn = true;
    }
    export const initial = async (minPauseDuration) => {await animate(animators.initial, minPauseDuration);}
    export const expand = async (minPauseDuration) => {await animate(animators.expand, minPauseDuration);}
    
    export const blink = async (minPauseDuration) => {
        lastBlinkTime = new Date();
        await expand(minPauseDuration);
        await initial(0);
    }

    export const doubleBlink = async (minPauseDuration) => {
        await blink(minPauseDuration);
        await wait(150);
        await blink(0);
    }
    export const click = async () => {
        if (drawn) {
            await blink(150);
        }
    }

    export const pauseDrawings = () => {
        if (svg && !drawn) {
            svg.pauseAnimations();
        }
    }
    export const unpauseDrawings = () => {
        if (svg) {
            svg.unpauseAnimations();
        }
    }

</script>

<svelte:options accessors={true} />

<Svg {id} {paths} {draw} bind:svg bind:show />