import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Login from '../components/Login'
import {BrowserRouter} from 'react-router-dom'

describe('<Login />', () => {
    let component

    beforeEach(() => {
        // simula la página
        render(<BrowserRouter> <Login /> </BrowserRouter>)
    })

    test.only('after clicking, error email must be shown', () => {
        // busca elemento que contenga el texto
        const button = component.getByText('Iniciar Sesión')
        // simula el click
        fireEvent.click(button)

        // busco elemento de error que contega el texto
        const errorEmail = component.getByText('Por favor, escribe un email')
        expect(errorEmail.parentNode).not.toHaveStyle('display: none')
    })

    test('after clicking, error password must be shown', () => {
        // busca elemento que contenga el texto
        const button = component.getByText('Iniciar Sesión')
        // simula el click
        fireEvent.click(button)

        // busco elemento de error que contega el texto
        const errorPass = component.getByText('Por favor, escribe una contraseña')
        expect(errorPass.parentNode).not.toHaveStyle('display: none')
    })
})