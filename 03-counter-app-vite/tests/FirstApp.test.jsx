/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en <FirstApp />', () => {

    test('Debe de hacer match con el snapshot', () => {

        render( <FirstApp />);

    });

});