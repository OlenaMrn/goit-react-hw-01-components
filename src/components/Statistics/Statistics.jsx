import PropTypes from 'prop-types';
import css from './Statistics.module.css'; // підключення стилів

export function Statistics({ title, stats }) {
  return (
    <div className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statsList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={css.item}
            key={id}
            style={{ backgroundColor: randomHexColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};
