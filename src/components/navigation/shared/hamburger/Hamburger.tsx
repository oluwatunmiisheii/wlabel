import { FC } from "react"

interface IHamburgerProps {
  toggle: () => void
}

export const Hamburger: FC<IHamburgerProps> = ({ toggle }) => {
  return (
    <button onClick={toggle}>
      <span className="bg-[#ef5f1e] w-8 h-0.5 block mb-2" />
			<span className="bg-[#ef5f1e] w-6 h-0.5 block" />
    </button>
  );
}
