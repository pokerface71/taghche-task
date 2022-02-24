import { FC } from 'react';
type IHistoryCardProps = {
	event: IHistoryEvent;
};
const HistoryCard: FC<IHistoryCardProps> = ({ event }) => {
	return (
		<div
			className={`${
				event.state === 'increase' ? 'increase' : 'decrease'
			} card-event`}
		>
			<div className="card-event--time">{event.time}</div>
			<div className="card-event--body">
				<div className="card-event--body--title">{event.title}</div>
				<div className="card-event--body--point">
					<span className="card-event--body--point--number">{event.point}</span>
					<div className="card-event--body--point--img">
						{event.state === 'increase' ? (
							<img src="/Images/leaf-green.svg" alt="" />
						) : (
							<img src="/Images/leaf-orange.svg" alt="" />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HistoryCard;
