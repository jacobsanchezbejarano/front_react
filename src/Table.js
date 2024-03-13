import React, { useEffect } from 'react';

const Table = (props) => {
    useEffect(() => {
        const n = props.data.n;
        const highlighted = props.data.options;
        const obstacles = props.data.obstacles;

        const table = document.getElementById('table');
        table.innerHTML = "";

        for (let i = 0; i < n; i++) {
            const row = document.createElement('div');
            row.className = 'row';

            for (let j = 0; j < n; j++) {
                const cell = document.createElement('div');
                cell.className = (i + j) % 2 === 0 ? 'cell white' : 'cell gray';

                if (highlighted.some(function(point) {
                    return point[0] === j + 1 && point[1] === n - i;
                })) {
                    cell.classList.add('marked');
                }

                if (obstacles.some(function(obstacle) {
                    return obstacle[0] === j + 1 && obstacle[1] === n - i;
                })) {
                    cell.classList.add('obstacle');
                }

                row.appendChild(cell);
            }

            table.appendChild(row);
        }
    }, [props.data]);

    return (
        <div id="table"></div>
    );
};

export default Table;
