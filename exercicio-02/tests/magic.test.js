const { getMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  if (favoriteCards.length > 4) {
    favoriteCards.pop()
  }
}


describe(' Testa a função getMagicCard', () => { 

  afterEach(() => retrievesFavoriteCards())
  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(2);
    await getMagicCard('130553');

    // implemente seus testes aqui
    expect(favoriteCards.length).toBe(5);
    expect(favoriteCards[favoriteCards.length - 1].name).toMatch('Beacon of Immortality')

  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(2);

    expect(favoriteCards).toHaveLength(4);
    // implemente seus testes aqui
    const expected = favoriteCards.map(({name: cardName}) => cardName)
    
    expect(expected).toEqual(['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'])
  });
});
