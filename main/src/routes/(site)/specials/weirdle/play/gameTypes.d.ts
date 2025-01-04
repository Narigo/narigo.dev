export type GameState = 'playing' | 'won' | 'lost';
export type Letter =
	| 'a'
	| 'b'
	| 'c'
	| 'd'
	| 'e'
	| 'f'
	| 'g'
	| 'h'
	| 'i'
	| 'j'
	| 'k'
	| 'l'
	| 'm'
	| 'n'
	| 'o'
	| 'p'
	| 'q'
	| 'r'
	| 's'
	| 't'
	| 'u'
	| 'v'
	| 'w'
	| 'x'
	| 'y'
	| 'z';
export type FiveLetterString = `${Letter}${Letter}${Letter}${Letter}${Letter}`;
export type FiveLetterWord = [Letter, Letter, Letter, Letter, Letter];
export type LetterInfo = { letter: Letter; correctnessInGuess: 'green' | 'yellow' | 'black' };
export type LetterInfos = [LetterInfo, LetterInfo, LetterInfo, LetterInfo, LetterInfo];
