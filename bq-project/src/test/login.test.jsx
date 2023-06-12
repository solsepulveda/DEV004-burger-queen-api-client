import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Login from '../components/Login'

describe('<Login />', () => {
    let component

    beforeEach(() => {
        component = render(<Login />)
    })

    test('after clicking, error email must be shown', () => {
        const button = component.getByText('Iniciar Sesión')
        fireEvent.click(button)

        const errorEmail = component.getByText('Por favor, escribe un email')
        expect(errorEmail.parentNode).not.toHaveStyle('display: none')
    })

    test('after clicking, error password must be shown', () => {
        const button = component.getByText('Iniciar Sesión')
        fireEvent.click(button)

        const errorPass = component.getByText('Por favor, escribe una contraseña')
        expect(errorPass.parentNode).not.toHaveStyle('display: none')
    })
})