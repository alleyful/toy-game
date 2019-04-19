import React from 'react';
import { Card } from 'semantic-ui-react';
import GameItem from "./game-item";

export default class GameList extends React.Component {
	constructor(...args) {
		super(...args);

		this.games = [
			{
				key: 1,
				title: '숫자야구',
				image: '',
				description: '숫자야구를 플레이 할 수 있습니다.',
				date: '2019.04.17',
				path: ''
			},
			{
				key: 2,
				title: '다른게임',
				image: '',
				description: '숫자야구를 플레이 할 수 있습니다.',
				date: '2019.04.18',
				path: ''
			}
		]
	}

	render() {

		return (
			<Card.Group>
				{(this.games || []).length > 0 && (this.games || []).reduce((target, game) => {
					target.push(React.cloneElement(<GameItem/>, {
							...game
						})
					);

					return target;
				}, [])}
			</Card.Group>
		)
	}
}