const seed = '123456';
const csvData = atob('data:text/csv;base64,${seed}');

function parseCSV(data) {
    const rows = data.split('\n');
    const sales = rows.slice(1).map(row => parseFloat(row.split(',')[1]));
    return sales.reduce((acc, sale) => acc + sale, 0);
}

const totalSales = parseCSV(csvData);
document.querySelector('#total-sales').textContent = totalSales.toFixed(2);
