import React from 'react'

export default function FilterTabsDoctor() {
    return (
        <div className="filter-tabs" style={{ marginBottom: '40px' }}>
            <button className="filter-tab active">All Doctors</button>
            <button className="filter-tab">Dermatologist</button>
            <button className="filter-tab">Aesthetician</button>
            <button className="filter-tab">Hair Specialist</button>
        </div>)
}
