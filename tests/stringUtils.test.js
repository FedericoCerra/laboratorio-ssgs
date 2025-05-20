const {
  reverseString,
  isPalindrome,
  truncateString,
  countCharacters,
} = require('../src/stringUtils');

describe('stringUtils', () => {
  describe('reverseString', () => {
    it('dovrebbe invertire una stringa', () => {
      expect(reverseString('ciao')).toBe('oaic');
    });

    it('dovrebbe restituire una stringa vuota se l\'input è vuoto', () => {
      expect(reverseString('')).toBe('');
    });

  });

  describe('isPalindrome', () => {
    it('dovrebbe restituire true per un palindromo semplice', () => {
      expect(isPalindrome('anna')).toBe(true);
    });

    it('dovrebbe restituire false per una stringa che non è un palindroma', () => {
      expect(isPalindrome('ciao')).toBe(false);
    });

    it('dovrebbe ignorare maiuscole e minuscole', () => {
      expect(isPalindrome('Anna')).toBe(true);
    });

    it('dovrebbe restituire true per una stringa vuota', () => {
      expect(isPalindrome('')).toBe(true);
    });
  });

  describe('truncateString', () => {
    it('dovrebbe restituire la stringa originale se è più corta della lunghezza massima', () => {
      expect(truncateString('ciao', 10)).toBe('ciao');
    });

    it('dovrebbe troncare la stringa e aggiungere "..." se è più lunga della lunghezza massima', () => {
      expect(truncateString('ciao mondo', 4)).toBe('ciao...');
    });

    it('dovrebbe restituire "..." se la lunghezza massima è 0', () => {
      expect(truncateString('ciao', 0)).toBe('...');
    });
  });

  describe('countCharacters', () => {
    it('dovrebbe contare correttamente i caratteri in una stringa', () => {
      expect(countCharacters('ciao')).toEqual({ c: 1, i: 1, a: 1, o: 1 });
    });

    it('dovrebbe gestire stringhe vuote', () => {
      expect(countCharacters('')).toEqual({});
    });

    it('dovrebbe contare correttamente i caratteri ripetuti', () => {
      expect(countCharacters('ciao ciao')).toEqual({
        c: 2,
        i: 2,
        a: 2,
        o: 2,
        ' ': 1,
      });
    });

    });
  });