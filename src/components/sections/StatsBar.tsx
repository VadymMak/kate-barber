import { STATS } from '@/lib/constants';

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-bar__grid">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="stats-bar__number">{stat.number}</div>
            <div className="stats-bar__label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
