import React from 'react';
import { Menu } from 'semantic-ui-react';

export default class GNB extends React.Component {
	state = { activeItem: 'home' }

	handleItemClick = (e, { name }) => this.setState({activeItem: name })

	render() {
		const { activeItem } = this.state;

		return(
			<Menu inverted>
				<Menu.Item
					name='home'
					active={activeItem === 'home'}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name='games'
					active={activeItem === 'games'}
					onClick={this.handleItemClick}
				/>
			</Menu>
		)
	}
}