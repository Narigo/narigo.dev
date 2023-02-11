<script lang="ts">
	import { base } from '$app/paths';
	import Bubble from '$lib/common/bubble/Bubble.svelte';
	import { writable } from 'svelte/store';
	import type { FiveLetterWord, GameState, Letter, LetterInfo } from './gameTypes';

	export let word: `${Letter}${Letter}${Letter}${Letter}${Letter}`;
	export let hint: string | undefined;

	let solution: FiveLetterWord = word.split('').map((l: Letter) => l.toLocaleLowerCase());
	let gameState = writable<GameState>('playing');
	let guesses = writable<LetterInfo[][]>([]);
	let nextGuess = writable('');

	function guess(e: Event) {
		e.preventDefault();
		if ($nextGuess.length !== solution.length) {
			return;
		}
		const guessedWord = $nextGuess.toLocaleLowerCase().split('') as FiveLetterWord;
		const currentGuess = guessedWord.reduce<LetterInfo[]>((acc, letter, index) => {
			const isLetterAtPosition = solution[index] === letter;
			const amountOfThisLetterInGreen = guessedWord.reduce((acc, l, i) => {
				return acc + (l === letter && solution[i] === l ? 1 : 0);
			}, 0);
			const amountOfThisLetterBefore = acc.filter((info) => info.letter === letter).length;
			const amountOfLetterInSolution = solution.filter((l) => l === letter).length;
			const hasThisAmountOfLetters =
				amountOfThisLetterBefore + amountOfThisLetterInGreen < amountOfLetterInSolution;
			const letterInfo: LetterInfo = {
				letter,
				correctnessInGuess: isLetterAtPosition
					? 'green'
					: hasThisAmountOfLetters
					? 'yellow'
					: 'black'
			};
			return [...acc, letterInfo];
		}, []);
		$guesses = [...$guesses, currentGuess];
		$nextGuess = '';
		if (currentGuess.every(({ correctnessInGuess }) => correctnessInGuess === 'green')) {
			$gameState = 'won';
		} else if ($guesses.length === 6) {
			$gameState = 'lost';
		}
	}
</script>

<p>
	You are searching a {solution.length} letter word. {#if hint}Another hint: {hint}{/if}
</p>
<div class="board">
	{#each $guesses as guess}
		<div class="guess">
			{#each guess as data}
				<span class="letter {data.correctnessInGuess}">{data.letter}</span>
			{/each}
		</div>
	{:else}
		<p>Nothing guessed yet!</p>
	{/each}
</div>
{#if $guesses.length < 6 && $gameState === 'playing'}
	<form on:submit={guess}>
		<input bind:value={$nextGuess} minlength={solution.length} maxlength={solution.length} />
		<button disabled={$nextGuess.length !== solution.length} on:click|preventDefault={guess}
			>Guess</button
		>
	</form>
{:else if $gameState === 'lost'}
	<Bubble>Better luck next time, the word to be found was: {word}</Bubble>
	<Bubble side="right"
		>If you want to create your own word, <a href="{base}/specials/weirdle/create">start here</a
		>!</Bubble
	>
{:else if $gameState === 'won'}
	<Bubble>You found it! It was {word}!</Bubble>
	<Bubble side="right"
		>If you want to create your own word, <a href="{base}/specials/weirdle/create">start here</a
		>!</Bubble
	>
{/if}

<style>
	.board {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		align-items: center;
	}
	.guess {
		font-family: sans-serif;
		display: flex;
		gap: 0.25em;
	}
	.letter {
		align-items: center;
		border-radius: 5px;
		color: #fff;
		display: inline-flex;
		height: 2em;
		justify-content: center;
		position: relative;
		width: 2em;
	}
	.letter::before {
		position: absolute;
		border-radius: 5px;
		box-shadow: 0 0 200px #000;
		z-index: -1;
	}
	.black {
		background: #000;
	}
	.yellow {
		background: rgba(200, 200, 0, 0.8);
	}
	.green {
		background: rgba(0, 128, 0, 0.8);
	}

	form {
		padding: 1em 0.5em;
		display: flex;
		justify-content: center;
		gap: 0.5em;
	}

	input {
		background: transparent;
		border: 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.25);
		font-family: monospace;
	}
	input:focus {
		outline: 0;
		border-bottom: 2px solid rgba(0, 0, 0, 1);
	}
</style>
