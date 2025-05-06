document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo para los vuelos
    const flightData = [
        {
            flightNumber: 'AV123',
            route: 'BOG → MIA',
            schedule: '08:00 - 12:30',
            status: 'on-time',
            gate: 'B12'
        },
        {
            flightNumber: 'LA456',
            route: 'SCL → LIM',
            schedule: '09:15 - 11:45',
            status: 'on-time',
            gate: 'A5'
        },
        {
            flightNumber: 'CM789',
            route: 'PTY → JFK',
            schedule: '10:30 - 16:15',
            status: 'delayed',
            gate: 'C8'
        },
        {
            flightNumber: 'AA321',
            route: 'MIA → BOG',
            schedule: '14:00 - 18:30',
            status: 'on-time',
            gate: 'D3'
        },
        {
            flightNumber: 'DL654',
            route: 'ATL → SCL',
            schedule: '15:45 - 23:20',
            status: 'cancelled',
            gate: '-'
        }
    ];

    // Función para renderizar la tabla de vuelos
    function renderFlightTable() {
        const tableBody = document.querySelector('#flightTable tbody');
        
        flightData.forEach(flight => {
            const row = document.createElement('tr');
            
            // Determinar la clase de estado
            let statusClass = '';
            let statusText = '';
            
            switch(flight.status) {
                case 'on-time':
                    statusClass = 'status-on-time';
                    statusText = 'A tiempo';
                    break;
                case 'delayed':
                    statusClass = 'status-delayed';
                    statusText = 'Retrasado';
                    break;
                case 'cancelled':
                    statusClass = 'status-cancelled';
                    statusText = 'Cancelado';
                    break;
            }
            
            row.innerHTML = `
                <td>${flight.flightNumber}</td>
                <td>${flight.route}</td>
                <td>${flight.schedule}</td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                <td>${flight.gate}</td>
            `;
            
            tableBody.appendChild(row);
        });
    }

    // Llamar a la función para renderizar la tabla
    renderFlightTable();
});