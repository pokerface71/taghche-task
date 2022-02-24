import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
const HeaderComponent: FC = () => {
	return (
		<header className="header before--scroll">
			<div className="header--wrapper">
				<nav className="header--nav d-sm-none d-none">
					<div className="header--nav--brand">
						<NavLink to={'/'}>طاقچه</NavLink>
					</div>
					<div className="header--nav--menu d-sm-none">
						<ul>
							<li>
								<NavLink to={'/'}>دسته بندی</NavLink>
							</li>
							<li>
								<NavLink to={'/'}>بی نهایت</NavLink>
							</li>
							<li>
								<NavLink to={'/'}>صوتی</NavLink>
							</li>
						</ul>
					</div>
					<div className="header--search">
						<div className="header--search--input_box">
							<div className="header--search--input_box--icon">
								<span>&#9906;</span>
							</div>
							<input type="text" className="header--search--input_box--input" />
						</div>
					</div>
				</nav>
				<div className="header--mobile-nav header--nav d-md-none d-lg-none d-xl-none">
					<div className="header--mobile--icon_menu">|||</div>
					<div className="header--mobile--icon_search">
						<span>&#9906;</span>
					</div>
				</div>
				<div className="header--mobile-brand d-md-none d-lg-none d-xl-none">
					<NavLink to={'/'}>طاقچه</NavLink>
				</div>
				<div className="header--button">
					<button className="btn btn-tagche btn-border">نصب طاقچه</button>
				</div>
			</div>
		</header>
	);
};

export default React.memo(HeaderComponent);
