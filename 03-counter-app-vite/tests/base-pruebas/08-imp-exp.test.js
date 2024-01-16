import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({id: 1,name: 'Batman',owner: 'DC'});

        console.log( hero );

    });

    test('getHeroeById debe de retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();

        console.log( hero );

    });

    test('debe de retornar un arreglo con los héroes de DC', () => {

        const owner = 'DC';
        const heroesByOwner = getHeroesByOwner( owner );

        const DCheroes = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ];

        expect( heroesByOwner.length ).toBe( 3 );
        expect( heroesByOwner ).toStrictEqual( DCheroes );
        expect( heroesByOwner ).toStrictEqual( heroes.filter( (heroe) => heroe.owner === owner) );

    });

    test('debe de retornar un arreglo con los héroes de Marvel', () => {

        const owner = 'Marvel';
        const heroesByOwner = getHeroesByOwner( owner );

        expect( heroesByOwner.length ).toBe( 2 );
        expect( heroesByOwner ).toStrictEqual( heroes.filter( (heroe) => heroe.owner === owner) );

    });
})