interface IBreadCrumb {
	link: string;
	title: string;
}
type StateIHistory = 'increase' | 'decrease';
interface IHistoryEvent {
	title: string;
	state: StateIHistory;
	point: number;
	time: string;
}
