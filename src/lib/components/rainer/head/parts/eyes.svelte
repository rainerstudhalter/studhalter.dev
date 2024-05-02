<script lang="ts">
    import wait from 'wait';
    
    import { defaultDrawSpeed, defaultDrawPause } from './defaults';
    import { setAnimations, getAnimations } from '../context';
    
    import Svg from '../svg.svelte';

    import closePaths from '../paths/eyes/close';
    import closeLeftPaths from '../paths/eyes/closeLeft';
    import closeRightPaths from '../paths/eyes/closeRight';
    import lookStraightPaths from '../paths/eyes/lookStraight';
    import lookDownPaths from '../paths/eyes/lookDown';
    import lookDownLeftPaths from '../paths/eyes/lookDownLeft';
    import lookDownRightPaths from '../paths/eyes/lookDownRight';
    import lookUpPaths from '../paths/eyes/lookUp';
    import lookUpLeftPaths from '../paths/eyes/lookUpLeft';
    import lookUpRightPaths from '../paths/eyes/lookUpRight';
    import lookLeftPaths from '../paths/eyes/lookLeft';
    import lookRightPaths from '../paths/eyes/lookRight';
    const paths = lookStraightPaths;
    
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

    export const closeDuration = 50;
    export const openDuration = 50;
    export const lookDuration = 150;
    export const blinkDuration = closeDuration + openDuration;
    export const doubleBlinkDuration = blinkDuration * 2;
    export const showDuration = draw ? nextBegin - drawPause : 0;

    const animators = {
        'close': {id: 'close', paths: closePaths, duration: closeDuration},
        'closeLeft': {id: 'closeLeft', paths: closeLeftPaths, duration: closeDuration},
        'closeRight': {id: 'closeRight', paths: closeRightPaths, duration: closeDuration},
        'lookStraight': {id: 'lookStraight', paths: lookStraightPaths, duration: lookDuration},
        'lookDown': {id: 'lookDown', paths: lookDownPaths, duration: lookDuration},
        'lookDownLeft': {id: 'lookDownLeft', paths: lookDownLeftPaths, duration: lookDuration},
        'lookDownRight': {id: 'lookDownRight', paths: lookDownRightPaths, duration: lookDuration},
        'lookUp': {id: 'lookUp', paths: lookUpPaths, duration: lookDuration},
        'lookUpLeft': {id: 'lookUpLeft', paths: lookUpLeftPaths, duration: lookDuration},
        'lookUpRight': {id: 'lookUpRight', paths: lookUpRightPaths, duration: lookDuration},
        'lookLeft': {id: 'lookLeft', paths: lookLeftPaths, duration: lookDuration},
        'lookRight': {id: 'lookRight', paths: lookRightPaths, duration: lookDuration},
    }
    export let lastAnimationId = animators.lookStraight.id;
    export let lastAnimationEndTime = new Date();
    export let preCloseAnimationId = animators.lookStraight.id;
    export let lastLookId = lastAnimationId.slice();
    export let unstraightLooks = 0;
    export let lastLookEndTime = new Date();
    export let lastBlinkTime = new Date();
    export let lastDoubleBlinkTime = new Date();

    setAnimations();
    const animations = getAnimations();

    let animating = false;
    let waiting = false;
    const defaultMinPauseDuration = 500;
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
            minPauseDuration = defaultMinPauseDuration;
            const missingPauseDuration = (new Date() - lastAnimationEndTime);
            if (missingPauseDuration < minPauseDuration) {
                await wait(minPauseDuration - missingPauseDuration);
            }
        }

        // execute the animation
        animations.push({from: animators[lastAnimationId].paths, to: newAnimation.paths, begin: svg ? svg.getCurrentTime()*1000 : showDuration, duration: newAnimation.duration});
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
    export const close = async (minPauseDuration) => {preCloseAnimationId = lastAnimationId.slice(); await animate(animators.close, minPauseDuration);}
    export const closeLeft = async (minPauseDuration) => {preCloseAnimationId = lastAnimationId.slice(); await animate(animators.closeLeft, minPauseDuration);}
    export const closeRight = async (minPauseDuration) => {preCloseAnimationId = lastAnimationId.slice(); await animate(animators.closeRight, minPauseDuration);}
    export const open = async (minPauseDuration) => {await animate({id: preCloseAnimationId, paths: animators[preCloseAnimationId].paths, duration: openDuration}, minPauseDuration);}
    export const lookStraight = async (minPauseDuration) => {unstraightLooks = 0; lastLookId = 'lookStraight'; await animate(animators.lookStraight, minPauseDuration); lastLookEndTime = new Date();}
    export const lookDown = async (minPauseDuration) => {unstraightLooks = unstraightLooks + 1; lastLookId = 'lookDown'; await animate(animators.lookDown, minPauseDuration); lastLookEndTime = new Date();}
    export const lookDownLeft = async (minPauseDuration) => {unstraightLooks = unstraightLooks + 1; lastLookId = 'lookDownLeft'; await animate(animators.lookDownLeft, minPauseDuration); lastLookEndTime = new Date();}
    export const lookDownRight = async (minPauseDuration) => {unstraightLooks = unstraightLooks + 1; lastLookId = 'lookDownRight'; await animate(animators.lookDownRight, minPauseDuration); lastLookEndTime = new Date();}
    export const lookUp = async (minPauseDuration) => {unstraightLooks = unstraightLooks + 1; lastLookId = 'lookUp'; await animate(animators.lookUp, minPauseDuration); lastLookEndTime = new Date();}
    export const lookUpLeft = async (minPauseDuration) => {unstraightLooks = unstraightLooks + 1; lastLookId = 'lookUpLeft'; await animate(animators.lookUpLeft, minPauseDuration); lastLookEndTime = new Date();}
    export const lookUpRight = async (minPauseDuration) => {unstraightLooks = unstraightLooks + 1; lastLookId = 'lookUpRight'; await animate(animators.lookUpRight, minPauseDuration); lastLookEndTime = new Date();}
    export const lookLeft = async (minPauseDuration) => {unstraightLooks = unstraightLooks + 1; lastLookId = 'lookLeft'; await animate(animators.lookLeft, minPauseDuration); lastLookEndTime = new Date();}
    export const lookRight = async (minPauseDuration) => {unstraightLooks = unstraightLooks + 1; lastLookId = 'lookRight'; await animate(animators.lookRight, minPauseDuration); lastLookEndTime = new Date();}

    export const looks = {
        lookStraight: lookStraight,
        lookDown: lookDown,
        lookDownLeft: lookDownLeft,
        lookDownRight: lookDownRight,
        lookUp: lookUp,
        lookUpLeft: lookUpLeft,
        lookUpRight: lookUpRight,
        lookLeft: lookLeft,
        lookRight: lookRight
    };
    const looksKeys = Object.keys(looks)

    export const getNextRandomLook = () => {
        // ensure we look straight once in a while
        animations.reset();
        if (lastLookId != 'lookStraight') {
            const maxUnstraightLooks = Math.floor(Math.random() * (5 - 3) + 3);
            if (unstraightLooks >= maxUnstraightLooks) {
                return lookStraight;
            }
        }

        // get a look we didnt have directly before
        let nextlookId = looksKeys[Math.floor(Math.random() * looksKeys.length)];
        if (nextlookId == lastLookId) {
            return getNextRandomLook();
        }
        return looks[nextlookId];
    }

    export const blink = async (minPauseDuration) => {
        lastBlinkTime = new Date();
        await close(minPauseDuration);
        await open(0);
    }
    export const doubleBlink = async (minPauseDuration) => {
        lastDoubleBlinkTime = new Date();
        await blink(minPauseDuration);
        await wait(150);
        await blink(0);
    }
    export const click = async () => {
        await blink(150);
    }
    export const clickLeft = async () => {
        await closeLeft(150);
        await open(0);
    }
    export const clickRight = async () => {
        await closeRight(150);
        await open(0);
    }

    // blink every 3 to 10 seconds and doubleBlink every 15 to 30 seconds
    export const blinkEnsurer = async () => {
        if (drawn) {
            const randomDoubleBlinkPause = Math.floor(Math.random() * (30000 - 15000) + 15000);
            if (new Date() - lastDoubleBlinkTime > randomDoubleBlinkPause) {
                await doubleBlink();
            }
            const randomBlinkPause = Math.floor(Math.random() * (10000 - 3000) + 3000);
            if (new Date() - lastBlinkTime > randomBlinkPause) {
                await blink();
            }
        }
        await wait(500);
        blinkEnsurer();
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
