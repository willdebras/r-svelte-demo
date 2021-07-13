<script>
	
let inputValue = "";
let inputPower = "";
let squaredJS = "";
let squaredR = "";


async function handleSubmit(e) {
		//e.preventDefault();

		// create response through POST

			const response = await fetch("/data", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ value: inputValue, power: inputPower }),
		});
		
		const body = await response.json();

		squaredJS = body.squaredJS
		squaredR = body.squaredR

				// update state
		//setSquaredJS(body.squaredJS);
		//setSquaredR(body.squaredR);


	};

	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<h2>This is a svelte app</h2>
	<p>Use the power of R in your backend!</p>
	<label for="numeral">Number to exponentiate</label>
	<input type="number" id = "numeral" bind:value={inputValue}>
	<label for="numeral">Power</label>
	<input type="number" id = "power" bind:value={inputPower}>
	<br>
	<button on:click={handleSubmit}>Submit</button>

	<div class = "break"></div>

	<div>Your answer is: {squaredR}</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	h2 {
		color: black;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 600;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	p {
		font-weight:400;
		font-style:italic;
	}

	.break {
		width:350px;
		border-bottom:2px solid #ff3e00;
		margin:auto;
		margin-top: 30px;
		margin-bottom:30px;
	}


</style>