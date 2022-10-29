import React from 'react';

class ClockClassBased extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            createdAt: new Date(),
            time: new Date()
        }
    }



    componentDidMount() {
        this.interval = setInterval(() => {
            const time = new Date();
            this.setState({
                time: time
                }
            )
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getProps() {
        return this.props.data;
    }

    render() {
        const diff = new Date().getTime() - this.state.createdAt.getTime();

        console.log(diff);
        if (diff > 5000 && diff < 10000) {
            throw new Error('Error message from Alexander\' component ');
        }

        return (
            <div>
                Clock {this.props.data}
                <span> {this.state.time.toLocaleTimeString()}</span>
            </div>
        );
    }
}

export default ClockClassBased;