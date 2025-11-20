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
	const decode = (decimal: string) => {
		return decimal;
	};
	const encode = (atonNif: string) => {
		const atonNifDigits = atonNif.split('') as Array<keyof typeof atonNifToDecimalMap>;
		console.log(atonNifDigits);
		let decimal = 0;
		for (let i = atonNifDigits.length; i > 0; i--) {
			const decimalDigit = atonNifToDecimalMap[atonNifDigits[i - 1]];
			decimal = decimalDigit;
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
	<FullWidthSection class="grid-rows-[1fr]">
		<Encoder
			{encode}
			{decode}
			placeholderDecode={m['tools.atonNifConverter.placeholderDecode']()}
			placeholderEncode={m['tools.atonNifConverter.placeholderEncode']()}
		/>
	</FullWidthSection>
</PageLayout>
