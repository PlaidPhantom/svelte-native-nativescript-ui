import { registerElement, NativeElementNode } from 'svelte-native/dom'
import { NativeViewElementNode, NativeElementPropType as PropType } from "svelte-native/dom";
import { RadPieChart, RadCartesianChart, PieSeries, DonutSeries, 
         LineSeries, SplineSeries, SplineAreaSeries, 
         AreaSeries, BarSeries, RangeBarSeries,
         BubbleSeries, ScatterBubbleSeries,
         ScatterSeries, CandlestickSeries,
         OhlcSeries,
         CategoricalAxis, DateTimeCategoricalAxis, DateTimeContinuousAxis,
         LinearAxis, LogarithmicAxis,
         RadCartesianChartGrid, RadLegendView,
         Palette, PaletteEntry, Trackball,
         ChartGridLineAnnotation, ChartPlotBandAnnotation 
} from 'nativescript-ui-chart';

import { View } from 'tns-core-modules/ui/core/view';

class BaseChartElement<T extends View> extends NativeViewElementNode<T> {
    constructor(tagName: string, viewClass: new () => T) {
        super(tagName, viewClass, null, { "series": PropType.ObservableArray, 
                                    "annotations": PropType.ObservableArray, 
                                    "palettes": PropType.ObservableArray});
    }
}

class PieChartElement extends BaseChartElement<RadPieChart> {
    constructor() {
        super('radPieChart', RadPieChart)
    }
}

class CartesianChartElement extends BaseChartElement<RadCartesianChart> {
    constructor() {
        super('radCartesianChart', RadCartesianChart)
    }
}

class PaletteElement extends NativeElementNode<Palette> {
    constructor() {
        super('pallete', Palette, "palettes", { "entries": PropType.ObservableArray })
    }
}

class ChartSeriesElement<T> extends NativeElementNode<T> {
    constructor(tagName: string, elClass: new () => T) {
        super(tagName, elClass, "series", { "seriesName": PropType.Value })
    }
}


export default class Charts {
    static register() {

        const registerAs = (tag: string, native: new () => any, parentProp: string = null) => 
            registerElement(tag, () => new NativeElementNode(tag, native, parentProp))

        const registerSeries = (tag: string, native: new () => any) => 
            registerElement(tag, () => new ChartSeriesElement(tag, native))

        //chart types
        registerElement('radPieChart', () => new PieChartElement());
        registerElement('radCartesianChart', () => new CartesianChartElement());
 
        //series types
        registerSeries('pieSeries', PieSeries);
        registerSeries('donutSeries', DonutSeries);
        registerSeries('lineSeries', LineSeries)
        registerSeries('splineSeries', SplineSeries)
        registerSeries('splineAreaSeries', SplineAreaSeries)
        registerSeries('areaSeries', AreaSeries)
        registerSeries('barSeries', BarSeries)
        registerSeries('rangeBarSeries', RangeBarSeries)
        registerSeries('bubbleSeries', BubbleSeries)
        registerSeries('scatterBubbleSeries', ScatterBubbleSeries)
        registerSeries('scatterSeries', ScatterSeries)
        registerSeries('candlestickSeries', CandlestickSeries)
        registerSeries('OhlcSeries', OhlcSeries)

        //axes types
        registerAs('categoricalAxis', CategoricalAxis)
        registerAs('dateTimeCategoricalAxis', DateTimeCategoricalAxis)
        registerAs('dateTimeContinuousAxis', DateTimeContinuousAxis)
        registerAs('linearAxis', LinearAxis)
        registerAs('logarithmicAxis', LogarithmicAxis)

        //grid
        registerAs('radCartesianChartGrid', RadCartesianChartGrid, "grid")

        //legend
        registerAs('radLegendView', RadLegendView, "legend")

        //palette
        registerAs('paletteEntry', PaletteEntry, "entries")
        registerElement('palette', () => new PaletteElement())

        //Trackball
        registerAs('trackball', Trackball, "trackball")

        //Annotations
        registerAs('chartGridLineAnnotation', ChartGridLineAnnotation, "annotations")
        registerAs('chartPlotBandAnnotation', ChartPlotBandAnnotation, "annotations")
    }
}