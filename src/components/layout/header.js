import React from 'react';
import GNB from './gnb';

export default class Header extends React.Component {
	render() {
		return(
			<section className="header-wrap">
				<GNB/>
			</section>
		)
	}
}