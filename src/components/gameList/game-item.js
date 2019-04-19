import React from 'react';
import { Card, Icon, Image } from "semantic-ui-react";

export default class GameItem extends React.Component {
	render() {
		const { key, title, image, description, date } = this.props;

		window.console.log(this.props);

		return(
			<Card key={key}>
				{image && <Image src={image} />}
				<Card.Content>
					<Card.Header>{title}</Card.Header>
					<Card.Meta>
						<span className="date">{date}</span>
					</Card.Meta>
					<Card.Description>
						{description}
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<Icon name="play" />
				</Card.Content>
			</Card>
		)
	}
}