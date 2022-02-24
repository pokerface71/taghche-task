import { FC } from 'react';
import { Link } from 'react-router-dom';
type IBeadCrumbProps = {
	breadCrumbs: IBreadCrumb[];
};
const BreadCrumb: FC<IBeadCrumbProps> = ({ breadCrumbs }) => {
	return (
		<div className="breadcrumb">
			<ul className="breadcrumb-ul">
				{breadCrumbs &&
					breadCrumbs.map((breadCrumb, index: number) => (
						<li key={index}>
							<Link to={breadCrumb.link}>{breadCrumb.title}</Link>
							{index !== breadCrumbs.length - 1 && (
								<span className="breadcrumb-slash">/</span>
							)}
						</li>
					))}
			</ul>
		</div>
	);
};

export default BreadCrumb;
