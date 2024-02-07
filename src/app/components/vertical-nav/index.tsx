import React from "react";

import VerticalNavMenuItem from "../vertical-nav-menuItem";
import styles from "./verticalNav.module.css";

export default function VerticalNav(): JSX.Element {
    return (
        <div className={styles.verticalNavContainer}>
            <VerticalNavMenuItem path='/dashboard' title="Dashboard" iconName="dashboard"/>
            <VerticalNavMenuItem path='' title="Reminders" iconName="reminder"/>
            <VerticalNavMenuItem path='' title="Surveys" iconName="list_alt"/>
            <VerticalNavMenuItem path='' title="People" iconName="face"/>
            <VerticalNavMenuItem path='' title="Payments" iconName="payments"/>
        </div>
    )
}