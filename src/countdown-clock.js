import React from "react";
import $ from "jquery";

import "./assets/css/common.css";
import "./assets/css/countdown-clock.css";

export default class CountdownClock extends React.PureComponent {

    render() {
        return <div className="countdown-clock signboard outer">
            <ul className="signboard front inner anim04c">
                <li className="year anim04c">
                    <span></span>
                </li>
                <ul className="calendarMain anim04c">
                    <li className="month anim04c">
                        <span></span>
                    </li>
                    <li className="date anim04c">
                        <span></span>
                    </li>
                    <li className="day anim04c">
                        <span></span>
                    </li>
                </ul>
                <li className="clock second anim04c">
                    <span></span>
                </li>
                <li className="calendarNormal date2 anim04c">
                    <span></span>
                </li>
            </ul>
            <ul className="signboard left inner anim04c">
                <li className="clock hour anim04c">
                    <span></span>
                </li>
                <li className="calendarNormal day2 anim04c">
                    <span></span>
                </li>
            </ul>
            <ul className="signboard right inner anim04c">
                <li className="clock minute anim04c">
                    <span></span>
                </li>
                <li className="calendarNormal month2 anim04c">
                    <span></span>
                </li>
            </ul>
        </div>
    }

    componentDidMount() {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const date = this.props.date;

        setInterval(function () {
            const remaining = this.getRemainingTime();
            const hours = remaining.hours;
            $(".hour").html((hours < 10 ? "0" : "") + hours);
            const seconds = remaining.minutes;
            $(".second").html((seconds < 10 ? "0" : "") + seconds);
            const minutes = remaining.seconds;
            $(".minute").html((minutes < 10 ? "0" : "") + minutes);

            $(".month span,.month2 span").text(monthNames[date.getMonth()]);
            $(".date span,.date2 span").text(date.getDate());
            $(".day span,.day2 span").text(dayNames[date.getDay()]);
            $(".year span").html(date.getFullYear());
        }.bind(this), 1000);



        $(".outer").on({
            mousedown: function () {
                $(".dribbble").css("opacity", "1");
            },
            mouseup: function () {
                $(".dribbble").css("opacity", "0");
            }
        });
    }

    getRemainingTime() {
        const hourRate = 1000 * 3600;
        const minRate = 1000 * 60;
        const secRate = 1000;

        let difference = this.props.date - new Date();
        const hours = Math.floor(difference / hourRate);

        difference = difference % hourRate;
        const minutes = Math.floor(difference / minRate);

        difference = difference % minRate;
        const seconds = Math.floor(difference / secRate);

        return { hours, minutes, seconds };
    }

}