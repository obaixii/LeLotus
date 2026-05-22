import { Link } from 'react-router-dom';
interface Props {
    active: string;
    onBrowseAll?: () => void;
}

export default function EmptyState({ active, onBrowseAll }: Props) {
    const category = active === 'all'
        ? 'results'
        : active.charAt(0).toUpperCase() + active.slice(1)

    return (
        <div className="relative flex flex-col gap-4 items-center justify-center text-center px-10 py-10 my-10 rounded-2xl overflow-hidden"
            style={{ background: 'var(--color-dark-grey)', border: '1.5px dashed rgba(255,255,255,0.12)' }}>

            {/* Soft teal glow */}
            <div className="absolute w-80 h-80 rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(0,148,163,0.07) 0%, transparent 70%)',
                    top: '50%', left: '50%', transform: 'translate(-50%,-50%)'
                }} />

            {/* Icon circle */}
            <div className="relative z-10 flex items-center justify-center w-18 h-18 rounded-full mb-7"
                style={{ width: 72, height: 72, background: 'rgba(0,148,163,0.08)', border: '1px solid rgba(0,148,163,0.25)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0094a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3l18 18M10.5 10.677a2 2 0 002.823 2.823" />
                    <path d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c1.889 2.991 5.282 6 9 6 1.55 0 3.043-.523 4.395-1.35M12 6c3.893 0 7.116 3.137 9 6a19.8 19.8 0 01-1.896 2.713" />
                    <path d="M12 6a3.5 3.5 0 013.5 3.5" />
                </svg>
            </div>

            {/* Label */}
            <p className="relative z-10 text-xs font-medium uppercase tracking-[0.2em] mb-3"
                style={{ color: '#0094a3' }}>
                Ops! No results
            </p>

            {/* Title */}
            <h3 className="relative z-10 font-display font-normal text-white text-2xl tracking-tight mb-3"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                Sorry nothing to show right now for <span style={{ color: '#0094a3' }}>{category}</span> Treatments
            </h3>

            {/* Description */}
            <p className="relative z-10 text-sm leading-relaxed max-w-sm mb-9"
                style={{ color: 'rgba(255,255,255,0.45)' }}>
                Check back soon or explore another treatment.
            </p>

            {/* Actions */}
            <div className="relative z-10 flex gap-3 flex-wrap justify-center">
                <button
                    onClick={onBrowseAll}
                    className="px-7 py-3 rounded-md text-xs font-medium uppercase tracking-widest transition-all cursor-pointer"
                    style={{
                        border: '1.5px solid rgba(255,255,255,0.2)',
                        color: 'rgba(255,255,255,0.7)',
                        background: 'transparent'
                    }}
                >
                    Browse All
                </button>
                <Link to="/contact">
                    <button
                        className="px-7 py-3 rounded-md text-xs font-medium uppercase tracking-widest transition-all cursor-pointer"
                        style={{ background: '#0094a3', color: '#fff', border: 'none' }}
                    >
                        Book a Consultation
                    </button>
                </Link>
            </div>


        </div>
    );
}