import { useState } from "react"

export default function FiltersTabsTreatment() {
    const [active, setActive] = useState('all')

    const filters = ['all', 'skin', 'hair', 'body', 'injectables', 'laser']

    return (
        <div className="filter-tabs">
            {filters.map(f => (
                <button
                    key={f}
                    className={`filter-tab${active === f ? ' active' : ''}`}
                    onClick={() => setActive(f)}
                >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
            ))}
        </div>
    )
}
