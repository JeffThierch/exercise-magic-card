const magic = require('../src/magic.js');
const { trybeSimulator } = require('../simulator/simulator.js');

const expected = {
  name: "Ancestor's Chosen",
  manaCost: '{5}{W}{W}',
  types: [ 'Creature' ],
  subtypes: [ 'Human', 'Cleric' ],
  rarity: 'Uncommon'
};

describe(' Testa a função getMagicCard', () => {
  it('Deve retornar um objeto com as propriedades esperadas', async () => {
    expect.assertions(5);
    const getMagicCardSimulator = trybeSimulator(magic, 'getMagicCard');
    const usedTest = await getMagicCardSimulator('130550');

    // implemente seus testes aqui    
   expect(usedTest).toMatchObject(expected)
   expect(Array.isArray(usedTest.types)).toBeTruthy()
   expect(usedTest.subtypes.length).toBe(2)
   expect(usedTest.rarity).toMatch('Uncommon')
   expect(usedTest.name).toMatch("Ancestor's Chosen")
  });
});

