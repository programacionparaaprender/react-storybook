import React from 'react';

import '../../App.css';

export default class CustomButton extends React.Component {
    static defaultProps = {
        title: 'Button Primary',
        classes: [],
    };

    render() {
        const { title, classes } = this.props;

        return (
            <button className={['custom-button', ...classes].join(' ')}>
                {title}
            </button>
        );
    }
}