<script lang="ts">
	import { resolve } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import { m } from '$lib/paraglide/messages';
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
	const decimalToAtonNifMap = ['0', '1', '2', '3', '4', '5', 'A', '6', 'N', '7', '8', '9'];
	const decode = (decimal: string) => {
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
	const encode = (atonNif: string) => {
		const atonNifDigits = atonNif.split('') as Array<keyof typeof atonNifToDecimalMap>;
		let decimal = 0;
		for (let i = 0; i < atonNifDigits.length; i++) {
			const decimalDigit = atonNifToDecimalMap[atonNifDigits[atonNifDigits.length - 1 - i]];
			decimal = decimalDigit * Math.pow(12, i) + decimal;
		}
		return decimal;
	};
</script>

<PageLayout
	backLink={resolve('/')}
	stretch={true}
	title={m['tools.atonNifConverter.title']()}
	description={m['tools.atonNifConverter.seoDescription']()}
>
	<FullWidthSection class="grid-rows-[max-content_1fr]">
		<a href={resolve('/aton-nif/description')}>About the Aton-Nif System</a>
		<Encoder
			{encode}
			{decode}
			placeholderDecode={m['tools.atonNifConverter.placeholderDecode']()}
			placeholderEncode={m['tools.atonNifConverter.placeholderEncode']()}
		/>
	</FullWidthSection>
</PageLayout>
