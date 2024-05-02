<script lang="ts">
    import wait from 'wait';

    import { onMount } from 'svelte';
    import { page } from "$app/stores";

    import { i18n } from '$lib/i18n'

    import { showNav } from '$lib/stores.ts';

    import Ear from './parts/ear.svelte';
    import Eyes from './parts/eyes.svelte';
    import Face from './parts/face.svelte';
    import Forehead from './parts/forehead.svelte';
    import Glasses from './parts/glasses.svelte';
    import Hat from './parts/hat.svelte';
    import Nose from './parts/nose.svelte';
    import Shirt from './parts/shirt.svelte';

    import eyesAreaLeftPaths from './paths/eyes/areaLeft';
    import eyesAreaRightPaths from './paths/eyes/areaRight';
    import noseAreaPaths from './paths/nose/area';

    export let tellstory = true;
    export let draw = true;

    export let id = undefined;
    export let ear;
    export let eyes;
    export let face;
    export let forehead;
    export let glasses;
    export let hat;
    export let nose;
    export let shirt;

    export let eyesArea;

    export const pauseDrawings = () => {
        for (const part of [ear, face, forehead, glasses, hat, nose, shirt]) {
            part.pauseDrawings();
        }
    }
    export const unpauseDrawings = () => {
        for (const part of [ear, face, forehead, glasses, hat, nose, shirt]) {
            part.unpauseDrawings();
        }
    }

    // story script
    export let storyPaused = false;
    export const playStory = async () => {
        const item = story.pop();

        if (item == undefined && eyes) {
            // no story anymore, do some random looks with the eyes every few seconds
            const randomLookPause = Math.floor(Math.random() * (10000 - 3000) + 3000);
            if (new Date() - eyes.lastLookEndTime > randomLookPause) {
                const nextlook = eyes.getNextRandomLook();
                await nextlook();
            }
            await wait(500);
        }

        if (Number.isInteger(item)) {
            await wait(item);
        } else if (typeof item == 'function') {
            await item();
        }
        while (storyPaused) {
            await wait(10);
        }
        playStory();
    }

    export const pauseStory = () => {
        storyPaused = true;
    }
    export const unpauseStory = () => {
        storyPaused = false;
    }
    
    export const story = [];
    onMount(() => {
        if (tellstory) {
            story.push(...[
                eyes.doShow, 500, eyes.blink,
                eyes.lookLeft, eyes.lookRight,
                eyes.lookUp, forehead.doShow, 500,
                eyes.lookDown, nose.doShow, 500, nose.blink,
                eyes.lookRight, ear.doShow, 500,
                eyes.lookDown, face.doShow, 500,
                eyes.lookStraight, glasses.doShow, 500,
                eyes.lookDown, shirt.doShow, 500,
                eyes.lookUp, hat.doShow, 1000,
                eyes.lookStraight
            ].reverse());
        } else {
            story.push(...[
                eyes.doShow, forehead.doShow, nose.doShow, ear.doShow, face.doShow, glasses.doShow, shirt.doShow, hat.doShow
            ]);
        }
        playStory(story);
        eyes.blinkEnsurer();
    });


	let lastClickTime = new Date();
	let beforeLookId = undefined;

	export const trackMouseClick = async (event) => {
		// pause all head animations
		lastClickTime = new Date();
		pauseStory();
		pauseDrawings();
		if (beforeLookId == undefined) {
			beforeLookId = eyes.lastLookId.slice();
		}
		
		// figure out where the click has happend in relation to the eyes and then look there
		const clickX = event.clientX;
		const clickY = event.clientY;
		const eyesRect = eyesArea.getBoundingClientRect();
		
		let minPauseDuration = 150;
		if (clickY < eyesRect.top) {
			// above the eyes
			if (clickX < eyesRect.left) {
				eyes.lookUpRight(minPauseDuration);
			} else if (clickX > eyesRect.right) {
				eyes.lookUpLeft(minPauseDuration);
			} else {
				eyes.lookUp(minPauseDuration);
			}
		} else if (clickY > eyesRect.bottom) {
			// below the eyes
			if (clickX < eyesRect.left) {
				eyes.lookDownRight(minPauseDuration);
			} else if (clickX > eyesRect.right) {
				eyes.lookDownLeft(minPauseDuration);
			} else {
				eyes.lookDown(minPauseDuration);
			}
		} else {
			// horizontal to the eyes
			if (clickX < eyesRect.left) {
				eyes.lookRight(minPauseDuration);
			} else if (clickX > eyesRect.right) {
				eyes.lookLeft(minPauseDuration);
			} else {
				if (eyes.lastAnimationId == 'lookStraight') {
					eyes.blink(minPauseDuration);
				} else {
					eyes.lookStraight(minPauseDuration);
				}
			}
		}

		// if there is no movement for at least 2s then proceed with the head animations
		await wait(2001);
		if (new Date() - lastClickTime > 2000) {
			if (story.length == 0) {
				await eyes.lookStraight();
			} else if (beforeLookId != undefined) {
				await eyes.looks[beforeLookId]();
				beforeLookId = undefined;
			}
			unpauseDrawings();
			unpauseStory();
		}
	}
    
    $: href = $page.data.type != 'logo' || $showNav ? i18n.route('/') : undefined;

    const clickArea = (event, action) => {
        if (!href) {
            event.stopPropagation();
            event.preventDefault();
            action();
        }
    }
</script>

<svelte:options accessors={true} />

<a {id} {href} on:click={() => $showNav = false}>
    <Ear bind:this={ear} id="{id}-ear" draw={draw} />
    <Eyes bind:this={eyes} id="{id}-eyes" draw={draw} />
    <Face bind:this={face} id="{id}-face" drawSpeed={0.3} drawPause={2} draw={draw} />
    <Forehead bind:this={forehead} id="{id}-forehead" draw={draw} />
    <Glasses bind:this={glasses} id="{id}-glasses" draw={draw} />
    <Hat bind:this={hat} id="{id}-hat" drawSpeed={0.3} drawPause={2} draw={draw} />
    <Nose bind:this={nose} id="{id}-nose" draw={draw} />
    <Shirt bind:this={shirt} id="{id}-shirt" drawSpeed={0.3} drawPause={2} draw={draw} />
    <svg id="{id}_areas" xmlns="http://www.w3.org/2000/svg" width="900" height="840" version="1.1" viewBox="0 0 900 840">
        <g bind:this={eyesArea}>
            <g on:click={(event) => clickArea(event, eyes.clickLeft)}>
                {#each Object.values(eyesAreaLeftPaths) as path, index}
                    <path d={path.d} style="fill:transparent; stroke:none;"></path>
                {/each}
            </g>
            <g on:click={(event) => clickArea(event, eyes.clickRight)}>
                {#each Object.values(eyesAreaRightPaths) as path, index}
                    <path d={path.d} style="fill:transparent; stroke:none;"></path>
                {/each}
            </g>
        </g>
        <g on:click={(event) => clickArea(event, nose.click)}>
            {#each Object.values(noseAreaPaths) as path, index}
                <path d={path.d} style="fill:transparent; stroke:none;"></path>
            {/each}
        </g>
    </svg>
</a>