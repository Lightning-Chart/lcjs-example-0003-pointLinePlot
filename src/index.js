/*
 * LightningChartJS example that showcases point & line -series with different point types.
 */
// Import LightningChartJS
const lcjs = require('@lightningchart/lcjs')

// Extract required parts from LightningChartJS.
const { lightningChart, PointShape, emptyFill, Themes } = lcjs

const pointSize = 10

// Create a XY Chart.
const chart = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
    .ChartXY({
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
    })
    .setTitle('Car Mileage Comparison')
    .setCursorMode('show-nearest')

// Add point line series with different point styles with a few static points.
// Combine different LineStyles, FillStyles and PointShapes.

// Add line series with rectangle-shaped points.
chart
    .addPointLineSeries({ automaticColorIndex: 0 },)
    .setPointShape(PointShape.Square)
    .setPointSize(pointSize)
    .setName('Sports Car')
    .appendJSON([
        { x: 0, y: 0 },
        { x: 50, y: 10 },
        { x: 80, y: 20 },
        { x: 100, y: 30 },
        { x: 150, y: 40 },
        { x: 180, y: 50 },
        { x: 230, y: 60 },
        { x: 290, y: 70 },
    ])

// Add line series with circle-shaped points.
chart
    .addPointLineSeries({ automaticColorIndex: 2 },)
    .setPointShape(PointShape.Circle)
    .setPointSize(pointSize)
    .setName('Family Car')
    .appendJSON([
        { x: 0, y: 0 },
        { x: 100, y: 10 },
        { x: 230, y: 20 },
        { x: 390, y: 30 },
        { x: 470, y: 40 },
        { x: 540, y: 50 },
        { x: 600, y: 60 },
        { x: 800, y: 70 },
    ])

// Add line series with triangle-shaped points.
chart
    .addPointLineSeries({ automaticColorIndex: 4 },)
    .setPointShape(PointShape.Triangle)
    .setPointSize(pointSize)
    .setName('Pick-up Car')
    .appendJSON([
        { x: 0, y: 0 },
        { x: 80, y: 10 },
        { x: 100, y: 20 },
        { x: 150, y: 30 },
        { x: 230, y: 40 },
        { x: 380, y: 50 },
        { x: 450, y: 60 },
        { x: 580, y: 70 },
    ])

// Setup view nicely.
chart.axisX.setInterval({ start: 0, end: 1000 }).setTitle('Km').setUnits('km', { displayOnAxis: false })
chart.axisY.setInterval({ start: 0, end: 100 }).setTitle('Litre').setUnits('l', { displayOnAxis: false })
