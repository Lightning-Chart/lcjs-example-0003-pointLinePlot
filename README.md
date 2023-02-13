# JavaScript Point Line Chart

![JavaScript Point Line Chart](pointLinePlot-darkGold.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

-   Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
-   Open the project folder in a terminal:

          npm install              # fetches dependencies
          npm start                # builds an application and starts the development server

-   The application is available at _http://localhost:8080_ in your browser, webpack-dev-server provides hot reload functionality.


## Description

_Also known as a Line Series, Line Graph, Line Chart, and Line with Markers_

This example shows the basic usage of a line series with 'markers' for visual representation of the data points. Similarly to line series, it is drawn on a Cartesian coordinate system and represents the relationship between two variables. Line series display information as a series of data points connected by straight line segments in any direction. This type of series additionally draws data markers on top of the line at the location specified in a dataset.

The chart can be created with few simple lines of code:

```javascript
// Add a line series with markers using default X and Y axes.
const lineSeries = chart.addPointLineSeries()
```

Line Series with markers provides an ability to specify styles for both markers and lines individually.

```javascript
lineSeries.setStrokeStyle(lineStyleObject).setPointFillStyle(fillStyleObject)
```

It shares the same API with the PointSeries, which allows configuring the visual representation of data markers.

-   PointShape: _enum_

    | PointShape |               Description               |
    | :--------: | :-------------------------------------: |
    | Rectangle  | The series with rectangle-shaped points |
    |  Triangle  | The series with triangle-shaped points. |
    |   Square   |  The series with square-shaped points.  |

    PointShape must be specified upon creation of Series!

    ```javascript
    // Add a line series with markers using default X and Y axes. Select Circle PointShape.
    const lineSeries = chart.addPointLineSeries({
        pointShape: PointShape.Circle,
    })
    ```

-   PointSize: _number_

    ```javascript
    lineSeries.setPointSize(5.0)
    ```

-   IndividualPointFill: _FillStyle_

    The style indicates individual per point coloring. The style enables the usage of individual fill taken from the input.
    The series can accept points in format `{ x: number, y: number, color: Color }`
    If the color is not provided during the input of data points ( e.g. in format `{ x: number, y: number }` ), the configurable fallback color is used.

    ```javascript
    // Create the instance of IndividualPointFill fill style.
    const individualStyle = new IndividualPointFill()
    // Set red color as a fallback color
    individualStyle.setFallbackColor(ColorRGBA(255, 0, 0))
    ```

As it was mentioned before, the series accepts points in format `{ x: number, y: number: color: Color }` with specified IndividualPointFill to enable individual point coloring or `{ x: number, y: number }` for other fill styles. Any number of points can be added with a single call similarly to line series with point markers.

-   Dataset without colors.

    -   If IndividualPointFill is specified, the fallback color is used. Otherwise, the specified fill style is used.

    ```javascript
    // Dataset of Vec2 data points without color.
    lineSeries.add([
        { x: 5, y: 10 },
        { x: 7.5, y: 20 },
        { x: 10, y: 30 },
    ])
    ```

-   Dataset with individual colors.

    -   If IndividualPointFill is specified, the color from data point or fallback color is used. Otherwise, the specified fill style is used.

    ```javascript
    // Dataset of Vec2Color data points with individual color.
    lineSeries.add([
        // use red color if IndividualPointFill is specified
        { x: 2.5, y: 0, color: ColorRGBA(255, 0, 0) },
        // use fallback color if IndividualPointFill is specified
        { x: 5, y: 10 },
        // use green color if IndividualPointFill is specified
        { x: 7.5, y: 20, color: ColorRGBA(0, 255, 0) },
        // use blue color if IndividualPointFill is specified
        { x: 10, y: 30, color: ColorRGBA(0, 0, 255) },
    ])
    ```


## API Links

* [Color palettes]
* [XY cartesian chart]
* [Point-line series]
* [RGBA color factory]
* [Solid FillStyle]
* [Solid LineStyle]
* [Individual point coloring]
* [Point shapes]


## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [LightningChart][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact support@lightningchart.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@lightningchart.com.

[0]: https://github.com/Arction/
[1]: https://lightningchart.com/lightningchart-js-api-documentation/
[2]: https://lightningchart.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://lightningchart.com/support-services/

© LightningChart Ltd 2009-2022. All rights reserved.


[Color palettes]: https://lightningchart.com/lightningchart-js-api-documentation/v4.0.0/variables/ColorPalettes.html
[XY cartesian chart]: https://lightningchart.com/lightningchart-js-api-documentation/v4.0.0/classes/ChartXY.html
[Point-line series]: https://lightningchart.com/lightningchart-js-api-documentation/v4.0.0/classes/PointLineSeries.html
[RGBA color factory]: https://lightningchart.com/lightningchart-js-api-documentation/v4.0.0/functions/ColorRGBA.html
[Solid FillStyle]: https://lightningchart.com/lightningchart-js-api-documentation/v4.0.0/classes/SolidFill.html
[Solid LineStyle]: https://lightningchart.com/lightningchart-js-api-documentation/v4.0.0/classes/SolidLine.html
[Individual point coloring]: https://lightningchart.com/lightningchart-js-api-documentation/v4.0.0/classes/IndividualPointFill.html
[Point shapes]: https://lightningchart.com/lightningchart-js-api-documentation/v4.0.0/enums/PointShape.html

