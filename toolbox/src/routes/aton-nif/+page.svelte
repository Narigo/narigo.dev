<script lang="ts">
	import { resolve } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import Encoder from '$lib/tools/encoder/Encoder.svelte';

	const atonNifToDecimalMap = {
		'0': 0,
		'1': 1,
		'2': 2,
		'3': 3,
		'4': 4,
		'5': 5,
		A: 6,
		'6': 7,
		N: 8,
		'7': 9,
		'8': 10,
		'9': 11
	} as const;
	type AtonNifDigit = keyof typeof atonNifToDecimalMap;

	const decimalToAtonNifMap = ['0', '1', '2', '3', '4', '5', 'A', '6', 'N', '7', '8', '9'];

	const isAtonNifNumber = (string: string): boolean => {
		return /^[0-9AN]+$/.test(string);
	};

	const isNumber = (string: string): boolean => {
		return /^[0-9]+$/.test(string);
	};

	const convertDecimalToAtonNif = (decimal: string) => {
		let decimalNumber = Number(decimal);
		if (decimalNumber === 0) return '0';
		let atonNif: Array<string> = [];
		while (decimalNumber > 0) {
			const remainder = decimalNumber % 12;
			atonNif.push(decimalToAtonNifMap[remainder]);
			decimalNumber = Math.floor(decimalNumber / 12);
		}
		return atonNif.reverse().join('');
	};
	const convertAtonNifToDecimal = (atonNif: string): string => {
		const atonNifDigits = atonNif.split('') as Array<AtonNifDigit>;
		let decimal = 0;
		for (let i = 0; i < atonNifDigits.length; i++) {
			const atonNifDigit = atonNifDigits[atonNifDigits.length - 1 - i].toLocaleUpperCase();
			if (!isAtonNifDigit(atonNifDigit)) {
				decimal = NaN;
				continue;
			}
			const decimalDigit = atonNifToDecimalMap[atonNifDigit];
			decimal = decimalDigit * Math.pow(12, i) + decimal;
		}
		return String(decimal);
	};
	const convertText = (
		text: string,
		predicate: (word: string) => boolean,
		converter: (word: string) => string
	): string => {
		const wordsOrNumbers = text.split(/\b/);
		return wordsOrNumbers
			.map((wordOrNumber) => {
				if (predicate(wordOrNumber)) {
					return converter(wordOrNumber);
				}
				return wordOrNumber;
			})
			.join('');
	};

	const decode = (atonNifText: string): string =>
		convertText(atonNifText, isNumber, convertDecimalToAtonNif);
	const encode = (atonNifText: string): string =>
		convertText(atonNifText, isAtonNifNumber, convertAtonNifToDecimal);

	function isAtonNifDigit(char: string): char is AtonNifDigit {
		return char in atonNifToDecimalMap;
	}
</script>

<PageLayout
	backLink={resolve('/')}
	stretch={true}
	title={m['tools.atonNifConverter.title']()}
	description={m['tools.atonNifConverter.seoDescription']()}
>
	<FullWidthSection class="grid-rows-[max-content_1fr]">
		<p>
			<a class="underline" href={resolve(`/aton-nif/about/${getLocale()}`)}
				>{m['tools.atonNifConverter.aboutLink']()}</a
			>
		</p>
		<Encoder
			{encode}
			encodeLabel={m['tools.atonNifConverter.encodeLabel']()}
			{decode}
			decodeLabel={m['tools.atonNifConverter.decodeLabel']()}
			placeholderDecode={m['tools.atonNifConverter.placeholderDecode']()}
			placeholderEncode={m['tools.atonNifConverter.placeholderEncode']()}
		/>
	</FullWidthSection>
</PageLayout>
