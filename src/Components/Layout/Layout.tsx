import { FC, ReactNode } from 'react';
import { FooterComponent, HeaderComponent } from '..';

interface ILayoutProps {
	children: ReactNode | JSX.Element | JSX.Element[] | string | string[];
}
const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<>
			<HeaderComponent />
			<div className="main-content mt-12">{children}</div>
			<FooterComponent />
		</>
	);
};

export default Layout;
