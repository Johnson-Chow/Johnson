

// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.load('current', { 'packages': ['table'] });
google.charts.load('current', { 'packages': ['corechart', 'bar'] });


// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawTable);
google.charts.setOnLoadCallback(drawDualY);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Fruits', 3],
        ['Meal', 1],
        ['Beverage', 1],
        ['Vagetables', 1],
        ['Snacks', 2]
    ]);

    // Set chart options
    var options = {
        'title': 'How Much Calorie I Ate Today',
        'width': 250,
        'height': 150
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
}
function drawChart1() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Weight Training', 3],
        ['Boxing', 1],
        ['Dancing', 1],
        ['Swiming', 1],
        ['Jogging', 2]
    ]);

    // Set chart options
    var options = {
        'title': 'How Much Calorie I Burn Today',
        'width': 250,
        'height': 150
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}
function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Friends');
    data.addColumn('number', 'Daily Fitness');
    data.addColumn('boolean', 'Weekly Fitness');
    data.addRows([
        ['Mike', { v: 10000, f: '$10,000' }, true],
        ['Jim', { v: 8000, f: '$8,000' }, false],
        ['Alice', { v: 12500, f: '$12,500' }, true],
        ['Bob', { v: 7000, f: '$7,000' }, true]
    ]);

    var table = new google.visualization.Table(document.getElementById('chart_div3'));

    table.draw(data, { showRowNumber: true, width: '100%', height: '80%' });
}


function drawDualY() {
    var data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Time of Day');
    data.addColumn('number', 'Motivation Level');
    data.addColumn('number', 'Energy Level');

    data.addRows([
        [{ v: [8, 0, 0], f: '8 am' }, 1, .25],
        [{ v: [9, 0, 0], f: '9 am' }, 2, .5],
        [{ v: [10, 0, 0], f: '10 am' }, 3, 1],
        [{ v: [11, 0, 0], f: '11 am' }, 4, 2.25],
        [{ v: [12, 0, 0], f: '12 pm' }, 5, 2.25],
        [{ v: [13, 0, 0], f: '1 pm' }, 6, 3],
        [{ v: [14, 0, 0], f: '2 pm' }, 7, 4],
        [{ v: [15, 0, 0], f: '3 pm' }, 8, 5.25],
        [{ v: [16, 0, 0], f: '4 pm' }, 9, 7.5],
        [{ v: [17, 0, 0], f: '5 pm' }, 10, 10],
    ]);

    var options = {
        chart: {
            title: 'Motivation and Energy Level Throughout the Day',
            subtitle: 'Based on a scale of 1 to 10'
        },
        series: {
            0: { axis: 'MotivationLevel' },
            1: { axis: 'EnergyLevel' }
        },
        axes: {
            y: {
                MotivationLevel: { label: 'Motivation Level (1-10)' },
                EnergyLevel: { label: 'Energy Level (1-100)' }
            }
        },
        hAxis: {
            title: 'Time of Day',
            format: 'h:mm a',
            viewWindow: {
                min: [7, 30, 0],
                max: [17, 30, 0]
            }
        },
        vAxis: {
            title: 'Rating (scale of 1-10)'
        }
    };

    var materialChart = new google.charts.Bar(document.getElementById('chart_div4'));
    materialChart.draw(data, options);
}