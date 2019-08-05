/**
 * LightningChartJS example that showcases point & line -series with different point types.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const {
    lightningChart,
    ColorPalettes,
    SolidFill,
    PointShape
} = lcjs

// ----- Cache styles -----
const pointSize = 10
const palette = ColorPalettes.warm(3)
const colors = [0, 1, 2].map(palette)
const fillStyles = colors.map(color => new SolidFill({ color }))

// Create a XY Chart.
const chart = lightningChart().ChartXY()
    .setTitle('Car Mileage Comparison')

// Add point line series with different point styles with a few static points.
// Combine different LineStyles, FillStyles and PointShapes.

// Add line series with reactangle-shaped points.
chart.addPointLineSeries()
    .setName('Sports Car')
    .setPointFillStyle(fillStyles[0])
    .setStrokeStyle((strokeStyle) => strokeStyle.setFillStyle(fillStyles[0]))
    .setPointSize(pointSize)
    .add([
        { x: 0, y: 0 },
        { x: 50, y: 10 },
        { x: 80, y: 20 },
        { x: 100, y: 30 },
        { x: 150, y: 40 },
        { x: 180, y: 50 },
        { x: 230, y: 60 },
        { x: 290, y: 70 }
    ])

// Add line series with circle-shaped points.
chart.addPointLineSeries({ pointShape: PointShape.Circle })
    .setName('Family Car')
    .setPointSize(pointSize)
    .setPointFillStyle(fillStyles[1])
    .setStrokeStyle((strokeStyle) => strokeStyle.setFillStyle(fillStyles[1]))
    .add([
        { x: 0, y: 0 },
        { x: 100, y: 10 },
        { x: 230, y: 20 },
        { x: 390, y: 30 },
        { x: 470, y: 40 },
        { x: 540, y: 50 },
        { x: 600, y: 60 },
        { x: 800, y: 70 }
    ])

// Add line series with triangle-shaped points.
chart.addPointLineSeries({ pointShape: PointShape.Triangle })
    .setName('Pick-up Car')
    .setPointSize(pointSize)
    .setPointFillStyle(fillStyles[2])
    .setStrokeStyle((strokeStyle) => strokeStyle.setFillStyle(fillStyles[2]))
    .add([
        { x: 0, y: 0 },
        { x: 80, y: 10 },
        { x: 100, y: 20 },
        { x: 150, y: 30 },
        { x: 230, y: 40 },
        { x: 380, y: 50 },
        { x: 450, y: 60 },
        { x: 580, y: 70 }
    ])

// Setup view nicely.
chart.getDefaultAxisX()
    .setInterval(0, 1000, false, true)
    .setTitle('Km')
chart.getDefaultAxisY()
    .setInterval(0, 100, false, true)
    .setTitle('Litre')
chart.setAutoCursor((cursor) => cursor
    .setResultTableAutoTextStyle(true)
    .setTickMarkerXAutoTextStyle(true)
    .setTickMarkerYAutoTextStyle(true)
)
