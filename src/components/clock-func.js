import {useEffect, useState} from "react";

export const ClockFunction = (props) => {

    const [time, setTime] = useState(new Date());

    // componentDidMount
    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date()
            setTime(time);
        }, 1000)


        // componentWillUnmount
        return () => clearInterval(interval);

    }, [])

    useEffect(() => {
    }, [time]);

    return (
        <div>
            Clock Functional {props.data}
            <span> {time.toLocaleTimeString()}</span>
        </div>
    )
}