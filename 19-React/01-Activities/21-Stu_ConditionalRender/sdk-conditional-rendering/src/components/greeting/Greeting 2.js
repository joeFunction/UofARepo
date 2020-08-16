import React from "react";
import UserGreeting from "../usergreeting/UserGreeting";
import GuestGreeting from "../guestgreeting/GuestGreeting";

const Greeting = (props) => {
    if (props.isLoggedIn) {
        return (<UserGreeting />);
    }

    return (<GuestGreeting />);
}

export default Greeting;