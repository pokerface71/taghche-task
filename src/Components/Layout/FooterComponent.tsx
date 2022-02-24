import React, { FC } from 'react';

const FooterComponent: FC = () => {
	return (
		<footer className="footer">
			<div className="footer--wrapper">©Taaghche.com v3.48.2</div>
		</footer>
	);
};

export default React.memo(FooterComponent);
