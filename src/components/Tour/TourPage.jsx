import React, { useCallback, useEffect, useState } from 'react';

import Section from '../Section/Section';
import PageTitle from '../Title/PageTitle';

import { TOURS } from '../utils/constants';
import TourItem from './TourItem';

const TourPage = () => {

    const items = TOURS;

    const [activeTab, setActiveTab] = useState(null);
    const [filtered, setFiltered] = useState([]);

    const tabs = [...new Set(items.map(({ country }) => country))];

    const toggleTab = useCallback(
        (tab) => {
            setActiveTab(tab);
            setFiltered(items.filter(({ country }) => country === tab));
        }, [items]
    )

    useEffect(() => {
        if (tabs.length && !activeTab) setActiveTab(tabs[0]);
    }, [tabs, activeTab, toggleTab]);


    return (
        <Section className="page-tour page">
            <div className="container">
                <PageTitle text='Все концерты' />
                <div className="tour-tabs">
                    <ul>
                        {tabs.map((tab) => (
                            <li
                                onClick={() => toggleTab(tab)}
                                key={tab}
                                className={`tour-tab ${activeTab === tab ? "active" : ""}`}
                            >{tab}</li>
                        ))}
                    </ul>
                </div>
                <div className="tour">
                    <ul className="tour-items">
                        {filtered.map((item, i) => (
                            <TourItem {...item} key={item.id} i={i} />
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    )
}

export default TourPage