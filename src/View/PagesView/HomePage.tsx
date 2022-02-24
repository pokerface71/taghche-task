import React, { FC } from 'react';
import { BreadCrumb, HistoryCard, Layout } from 'src/Components';
const breadCrumbs: IBreadCrumb[] = [
	{ link: '/', title: 'رویش' },
	{ link: '/', title: 'تاریخچه برگ ' },
];
const listHistoryEvent: IHistoryEvent[] = [
	{ title: 'خرید کتاب ', state: 'increase', point: 250, time: '20:30' },
	{ title: 'تخفیف 30 درصد', state: 'decrease', point: 10, time: '20:30' },
	{ title: 'تخفیف 30 درصد', state: 'decrease', point: 10, time: '20:30' },
	{ title: 'تخفیف 30 درصد', state: 'decrease', point: 10, time: '20:30' },
	{ title: 'تخفیف 30 درصد', state: 'decrease', point: 10, time: '20:30' },
	{ title: 'تخفیف 30 درصد', state: 'decrease', point: 10, time: '20:30' },
	{ title: 'تخفیف 30 درصد', state: 'decrease', point: 10, time: '20:30' },
	{ title: 'تخفیف 30 درصد', state: 'decrease', point: 10, time: '20:30' },
	{ title: 'تخفیف 30 درصد', state: 'decrease', point: 10, time: '20:30' },
	{ title: 'تخفیف 30 درصد', state: 'decrease', point: 10, time: '20:30' },
];
const HomePage: FC = () => {
	return (
		<Layout>
			<div className="main-content">
				<BreadCrumb breadCrumbs={breadCrumbs} />
				<div className="main-content--body">
					<div className="main-content--body-wrapper">
						<div className="section-history">
							<div className="section-history--event">
								{listHistoryEvent.map((event, index: number) => (
									<HistoryCard event={event} key={index} />
								))}
							</div>
							<div className="section-history--img_wrapper">
								<img
									className="section-history--img_wrapper--img"
									src="/Images/rooyeshGoldoon-old.png"
									alt="گلدان"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default HomePage;
