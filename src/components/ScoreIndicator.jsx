import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export const ScoreIndicator = ({ score, size = 'md', textSize = 26, className }) => {

    let keyColor = 0;

    const sizes = {
        sm: 'w-10',
        md: 'w-14',
        lg: 'w-16',
        xl: 'w-20',
    }

    const colors = {
        70: {
            pathColor: '#059669',
            trailColor: '#022c22',
            textColor: '#059669',
        },
        50: {
            pathColor: '#eab308',
            trailColor: '#713f12',
            textColor: '#eab308',
        },
        25: {
            pathColor: '#d97706',
            trailColor: '#451a03',
            textColor: '#d97706',
        },
        0: {
            pathColor: '#dc2626',
            trailColor: '#7f1d1d',
            textColor: '#dc2626',
        }
    }

    for (const key in colors) {
        if (parseInt(key) <= score) keyColor = key;
    }

    return (
        <div className={`${sizes[size]} ${className}`}>
            <CircularProgressbar value={score} text={`${score}%`} styles={buildStyles({
                ...colors[keyColor],
                textSize,
            })} />
        </div>
    );
}