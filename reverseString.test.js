const reverseString = require('./reverseString');

test('Reverse "Sadiq" to "qidaS"', () => {
    expect(reverseString('Sadiq')).toBe('qidaS');
});

test('Revere "Come and see" to ""', () => {
    expect(reverseString('Come and see')).toBe('ees dna emoC');
});