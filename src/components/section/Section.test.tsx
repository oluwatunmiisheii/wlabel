import { Section } from "./Section"
import { ComponentProps } from 'react';
import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from "components/navigation/navbar/Navbar";

const children = <div>children</div>;

const defaultProps: ComponentProps<typeof Section> = {
  children,
  navType: "one",
  theme: 'dark'
};

const setup = (props: ComponentProps<typeof Section> = defaultProps) =>
  render(
    <MemoryRouter>
      <Section {...props}>{children}</Section>
    </MemoryRouter>
  );


describe(`${Section.name}`, () => {
  it('should render with children', () => {
    setup();
    expect(screen.getByText('children')).toBeInTheDocument();
  });

  it('should render with navType and theme passed as props', async () => {
    const { root } = create(<MemoryRouter><Section {...defaultProps} /></MemoryRouter>);
    const navbar = await root.findByType(Navbar);
    expect(navbar.props.navType).toBe('one');
    expect(navbar.props.theme).toBe('dark');
  });
});
