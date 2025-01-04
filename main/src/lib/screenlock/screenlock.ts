export function supportsScreenLock(): boolean {
	return 'wakeLock' in navigator;
}

type ScreenLock = {
	release: () => Promise<void>;
};

export async function requestScreenLock(): Promise<ScreenLock> {
	const lock = await navigator.wakeLock.request('screen');
	return {
		async release() {
			return lock.release();
		}
	};
}
