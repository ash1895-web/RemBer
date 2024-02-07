import React from "react";

import VerticalNavMenuItem from "../vertical-nav-menuItem";
import styles from "./verticalNav.module.css";

export default function VerticalNav(): JSX.Element {
    return (
        <div className={styles.verticalNavContainer}>
            <VerticalNavMenuItem title="Dashboard" iconName="dashboard"/>
            <VerticalNavMenuItem title="Dashboard" iconName="dashboard"/>
            <VerticalNavMenuItem title="Dashboard" iconName="dashboard"/>
            <VerticalNavMenuItem title="Dashboard" iconName="dashboard"/>
            <VerticalNavMenuItem title="Dashboard" iconName="dashboard"/>
        </div>
    )
}