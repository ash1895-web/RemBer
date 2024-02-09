import React from "react";

import VerticalNavMenuItem from "../vertical-nav-menuItem";
import styles from "./verticalNav.module.css";

export default function VerticalNav(): JSX.Element {
    return (
        <div className={styles.verticalNavContainer}>
            <VerticalNavMenuItem path='/dashboard' title="Dashboard" iconName="dashboard"/>
            <VerticalNavMenuItem path='/reminders' title="Reminders" iconName="reminder"/>
            <VerticalNavMenuItem path='/surveys' title="Surveys" iconName="list_alt"/>
            <VerticalNavMenuItem path='/people' title="People" iconName="face"/>
            <VerticalNavMenuItem path='' title="Payments" iconName="payments"/>
            <VerticalNavMenuItem path='' title="Attendance" iconName="attribution"/>
        </div>
    )
}