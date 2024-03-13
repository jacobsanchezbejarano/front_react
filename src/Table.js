import React, { useEffect } from 'react';

const Table = (props) => {
    useEffect(() => {
        const n = props.data.n;
        const puntosMarcados = props.data.options;
        const obstaculos = props.data.obstacles;

        const table = document.getElementById('table');
        table.innerHTML = "";

        for (let i = 0; i < n; i++) {
            const row = document.createElement('div');
            row.className = 'row';

            for (let j = 0; j < n; j++) {
                const cell = document.createElement('div');
                cell.className = (i + j) % 2 === 0 ? 'cell white' : 'cell gray';

                if (puntosMarcados.some(function(punto) {
                    return punto[0] === j + 1 && punto[1] === n - i;
                })) {
                    cell.classList.add('marked');
                }

                if (obstaculos.some(function(obstaculo) {
                    return obstaculo[0] === j + 1 && obstaculo[1] === n - i;
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
