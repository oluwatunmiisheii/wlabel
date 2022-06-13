import { ComponentProps } from 'react';
import { render, screen } from '@testing-library/react'
import { Button } from "./Button"

const setup = (props: ComponentProps<typeof Button>) => (
	render(<Button {...props} />)
)

const onClick = jest.fn()
const children = <>Button</>

const defaultProps = {
	variant: "primary",
	type: "button",
	size: "medium",
	children,
	onClick
} as ComponentProps<typeof Button>

describe('Button', () => {
	test('should render without crashing', () => {
		setup({ ...defaultProps })
	})

	test('should render children', () => {
		setup({ ...defaultProps })
		expect(screen.getByText('Button')).toBeInTheDocument();
	})

	test('should render primary variant', () => {
		setup({ ...defaultProps, variant: "primary" })
		expect(screen.getByRole('button')).toHaveClass('primary');
	})
	
	test('should render secondary variant', () => {
		setup({ ...defaultProps, variant: "secondary" })
		expect(screen.getByRole('button')).toHaveClass('secondary');
	})

	test('should render tertiary variant', () => {
		setup({ ...defaultProps, variant: "tertiary" })
		expect(screen.getByRole('button')).toHaveClass('tertiary');
	})

	test('should render outline variant', () => {
		setup({ ...defaultProps, variant: "outline" })
		expect(screen.getByRole('button')).toHaveClass('outline');
	})

	test('should render link variant', () => {
		setup({ ...defaultProps, variant: "link" })
		expect(screen.getByRole('button')).toHaveClass('link');
	})

	test('should render small size', () => {
		setup({ ...defaultProps, size: "small" })
		expect(screen.getByRole('button')).toHaveClass('small');
	})

	test('should render medium size', () => {
		setup({ ...defaultProps, size: "medium" })
		expect(screen.getByRole('button')).toHaveClass('medium');
	})

	test('should render large size', () => {
		setup({ ...defaultProps, size: "large" })
		expect(screen.getByRole('button')).toHaveClass('large');
	})

	test('should call onClick', () => {
		setup({ ...defaultProps })
		screen.getByRole('button').click()
		expect(onClick).toHaveBeenCalledTimes(1)
	})

	test('should render disabled', () => {
		setup({ ...defaultProps, disabled: true })
		expect(screen.getByRole('button')).toBeDisabled()
	})
})