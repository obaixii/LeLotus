import EmptyState from "../Main/EmptyState";

interface Props {
    active: string;
    onBrowseAll?: () => void;
}

const cards = [
    {
        cat: 'skin',
        treatment: 'Acne Treatment',
        result: '6 sessions · Visible clearing within 3 weeks',
        before: 'linear-gradient(160deg,#d4cac4,#bdb4ac)',
        after: 'linear-gradient(160deg,#c8e8e0,#9dd0c4)',
    },
    {
        cat: 'skin',
        treatment: 'Skin Rejuvenation',
        result: 'HydraFacial series · Radiant, even skin tone',
        before: 'linear-gradient(160deg,#d4cac4,#bdb4ac)',
        after: 'linear-gradient(160deg,#b8e0d8,#90ccc4)',
    },
    {
        cat: 'hair',
        treatment: 'Hair Restoration',
        result: 'PRP + Mesotherapy · 40% density increase',
        before: 'linear-gradient(160deg,#ccc4c0,#b4acaa)',
        after: 'linear-gradient(160deg,#c0e4d8,#98d0c0)',
    },
    {
        cat: 'injectables',
        treatment: 'Lip Enhancement',
        result: 'Hyaluronic acid fillers · Natural volume',
        before: 'linear-gradient(160deg,#d0c8c4,#b8b0ac)',
        after: 'linear-gradient(160deg,#a8dcd0,#80c8bc)',
    },
    {
        cat: 'injectables',
        treatment: 'Under Eye Rejuvenation',
        result: 'Tear trough fillers · Dark circles improved',
        before: 'linear-gradient(160deg,#cec8c4,#b6b0ac)',
        after: 'linear-gradient(160deg,#b0d8cc,#88c4b8)',
    },
    {
        cat: 'laser',
        treatment: 'Pigmentation Treatment',
        result: 'Q-switched laser · 80% pigment reduction',
        before: 'linear-gradient(160deg,#d0ccc8,#b8b4b0)',
        after: 'linear-gradient(160deg,#b8dcd4,#90c8bc)',
    },
]

export default function GridBA({ active, onBrowseAll }: Props) {
    const visible = active === 'all'
        ? cards
        : cards.filter(c => c.cat === active)

    if (visible.length === 0) return <EmptyState active={active} onBrowseAll={onBrowseAll} />

    return (
        <div className="ba-grid">
            {visible.map((card, i) => (
                <div key={i} className="ba-card">
                    <div className="ba-images">
                        <div className="ba-img ba-before" style={{ background: card.before }}>Before</div>
                        <div className="ba-img ba-after" style={{ background: card.after }}>After</div>
                    </div>
                    <div className="ba-info">
                        <div className="ba-treatment">{card.treatment}</div>
                        <div className="ba-result">{card.result}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}