( function( $ ) {
  'use strict'; // Start of use strict

// am-column
   var amcolumn=$("#am-column");
      if(amcolumn.length){
     am4core.useTheme(am4themes_animated);
      var chart = am4core.create("am-column", am4charts.XYChart);
      chart.data = [{
        "country": "USA",
        "visits": 23725
      }, {
        "country": "China",
        "visits": 1882
      }, {
        "country": "Japan",
        "visits": 1809
      }, {
        "country": "Germany",
        "visits": 1322
      }, {
        "country": "UK",
        "visits": 1122
      }, {
        "country": "France",
        "visits": 1114
      }, {
        "country": "India",
        "visits": 984
      }, {
        "country": "Spain",
        "visits": 711
      }, {
        "country": "Netherlands",
        "visits": 665
      }, {
        "country": "Russia",
        "visits": 580
      }, {
        "country": "South Korea",
        "visits": 443
      }, {
        "country": "Canada",
        "visits": 441
      }];

      chart.padding(40, 40, 40, 40);

      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.minGridDistance = 60;


      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.max = 24000;
      valueAxis.strictMinMax = true;
      valueAxis.renderer.minGridDistance = 30;

      valueAxis.renderer.labels.template.hiddenState.transitionDuration = 2000;
      valueAxis.renderer.labels.template.defaultState.transitionDuration = 2000;

      // axis break
      var axisBreak = valueAxis.axisBreaks.create();
      axisBreak.startValue = 2100;
      axisBreak.endValue = 22900;
      axisBreak.breakSize = 0.01;


      // make break expand on hover
      var hoverState = axisBreak.states.create("hover");
      hoverState.properties.breakSize = 1;
      hoverState.properties.opacity = 0.1;
      hoverState.transitionDuration = 1500;

      axisBreak.defaultState.transitionDuration = 1000;
       

      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryX = "country";
      series.dataFields.valueY = "visits";
      series.columns.template.tooltipText = "{valueY.value}";
      series.columns.template.tooltipY = 0;
      series.columns.template.strokeOpacity = 0;

      // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
      series.columns.template.adapter.add("fill", function (fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });

      }


  var amlinegraph=$("#am-line-graph");
      if(amlinegraph.length){
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      var chart = am4core.create("am-line-graph", am4charts.XYChart);

      var data = [];
      var value = 50;
      for(let i = 0; i < 300; i++){
        let date = new Date();
        date.setHours(0,0,0,0);
        date.setDate(i);
        value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({date:date, value: value});
      }

      chart.data = data;

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 60;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "value";
      series.dataFields.dateX = "date";
      series.tooltipText = "{value}"

      series.tooltip.pointerOrientation = "vertical";

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.snapToSeries = series;
      chart.cursor.xAxis = dateAxis;

    }   


var amradialline=$("#am-radial-line");
      if(amradialline.length){

    am4core.useTheme(am4themes_animated);

    var chart = am4core.create("am-radial-line", am4charts.RadarChart);

    var data = [];
    var value1 = 500;
    var value2 = 600;

    for(var i = 0; i < 12; i++){
      let date = new Date();
      date.setMonth(i, 1);
      value1 -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 50);
      value2 -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 50);
      data.push({date:date, value1:value1, value2:value2})
    }

    chart.data = data;

    /* Create axes */
    var categoryAxis = chart.xAxes.push(new am4charts.DateAxis());

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.extraMin = 0.2;
    valueAxis.extraMax = 0.2;
    valueAxis.tooltip.disabled = true;

    /* Create and configure series */
    var series1 = chart.series.push(new am4charts.RadarSeries());
    series1.dataFields.valueY = "value1";
    series1.dataFields.dateX = "date";
    series1.strokeWidth = 3;
    series1.tooltipText = "{valueY}";
    series1.name = "Series 2";
    series1.bullets.create(am4charts.CircleBullet);

    var series2 = chart.series.push(new am4charts.RadarSeries());
    series2.dataFields.valueY = "value2";
    series2.dataFields.dateX = "date";
    series2.strokeWidth = 3;
    series2.tooltipText = "{valueY}";
    series2.name = "Series 2";
    series2.bullets.create(am4charts.CircleBullet);


    chart.cursor = new am4charts.RadarCursor();

    chart.legend = new am4charts.Legend();
}


var amdumbbellplot=$("#am-dumbbell-plot");
      if(amdumbbellplot.length){

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("am-dumbbell-plot", am4charts.XYChart);

    var data = [];
    var open = 100;
    var close = 120;

    var names = ["Raina",
      "Demarcus",
      "Carlo",
      "Jacinda",
      "Richie",
      "Antony",
      "Amada",
      "Idalia",
      "Janella",
      "Marla",
      "Curtis",
      "Shellie",
      "Meggan",
      "Nathanael",
      "Jannette",
      "Tyrell",
      "Sheena",
      "Maranda",
      "Briana",
      "Rosa",
      "Rosanne",
      "Herman",
      "Wayne",
      "Shamika",
      "Suk",
      "Clair",
      "Olivia",
      "Hans",
      "Glennie",
    ];

    for (var i = 0; i < names.length; i++) {
      open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
      close = open + Math.round(Math.random() * 10) + 3;
      data.push({ category: names[i], open: open, close: close });
    }

    chart.data = data;

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.ticks.template.disabled = true;
    categoryAxis.renderer.axisFills.template.disabled = true;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = -90;
    categoryAxis.renderer.labels.template.horizontalCenter = "left";
    categoryAxis.renderer.labels.template.dx = 17;
    categoryAxis.renderer.inside = true;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;

    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";

    var openBullet = series.bullets.create(am4charts.CircleBullet);
    openBullet.locationY = 1;

    var closeBullet = series.bullets.create(am4charts.CircleBullet);

    closeBullet.fill = chart.colors.getIndex(4);
    closeBullet.stroke = closeBullet.fill;

    chart.cursor = new am4charts.XYCursor();
}



  var amstackedarea=$("#am-stacked-area");
      if(amstackedarea.length){
          // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        var chart = am4core.create("am-stacked-area", am4charts.XYChart);

        chart.data = [{
          "year": "1994",
          "cars": 1587,
          "motorcycles": 650,
          "bicycles": 121
        }, {
          "year": "1995",
          "cars": 1567,
          "motorcycles": 683,
          "bicycles": 146
        }, {
          "year": "1996",
          "cars": 1617,
          "motorcycles": 691,
          "bicycles": 138
        }, {
          "year": "1997",
          "cars": 1630,
          "motorcycles": 642,
          "bicycles": 127
        }, {
          "year": "1998",
          "cars": 1660,
          "motorcycles": 699,
          "bicycles": 105
        }, {
          "year": "1999",
          "cars": 1683,
          "motorcycles": 721,
          "bicycles": 109
        }, {
          "year": "2000",
          "cars": 1691,
          "motorcycles": 737,
          "bicycles": 112
        }, {
          "year": "2001",
          "cars": 1298,
          "motorcycles": 680,
          "bicycles": 101
        }, {
          "year": "2002",
          "cars": 1275,
          "motorcycles": 664,
          "bicycles": 97
        }, {
          "year": "2003",
          "cars": 1246,
          "motorcycles": 648,
          "bicycles": 93
        }, {
          "year": "2004",
          "cars": 1318,
          "motorcycles": 697,
          "bicycles": 111
        }, {
          "year": "2005",
          "cars": 1213,
          "motorcycles": 633,
          "bicycles": 87
        }, {
          "year": "2006",
          "cars": 1199,
          "motorcycles": 621,
          "bicycles": 79
        }, {
          "year": "2007",
          "cars": 1110,
          "motorcycles": 210,
          "bicycles": 81
        }, {
          "year": "2008",
          "cars": 1165,
          "motorcycles": 232,
          "bicycles": 75
        }, {
          "year": "2009",
          "cars": 1145,
          "motorcycles": 219,
          "bicycles": 88
        }, {
          "year": "2010",
          "cars": 1163,
          "motorcycles": 201,
          "bicycles": 82
        }, {
          "year": "2011",
          "cars": 1180,
          "motorcycles": 285,
          "bicycles": 87
        }, {
          "year": "2012",
          "cars": 1159,
          "motorcycles": 277,
          "bicycles": 71
        }];

        chart.dateFormatter.inputDateFormat = "yyyy";
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 60;
        dateAxis.startLocation = 0.5;
        dateAxis.endLocation = 0.5;
        dateAxis.baseInterval = {
          timeUnit: "year",
          count: 1
        }

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;

        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "year";
        series.name = "cars";
        series.dataFields.valueY = "cars";
        series.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
        series.tooltipText = "[#000]{valueY.value}[/]";
        series.tooltip.background.fill = am4core.color("#FFF");
        series.tooltip.getStrokeFromObject = true;
        series.tooltip.background.strokeWidth = 3;
        series.tooltip.getFillFromObject = false;
        series.fillOpacity = 0.6;
        series.strokeWidth = 2;
        series.stacked = true;

        var series2 = chart.series.push(new am4charts.LineSeries());
        series2.name = "motorcycles";
        series2.dataFields.dateX = "year";
        series2.dataFields.valueY = "motorcycles";
        series2.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
        series2.tooltipText = "[#000]{valueY.value}[/]";
        series2.tooltip.background.fill = am4core.color("#FFF");
        series2.tooltip.getFillFromObject = false;
        series2.tooltip.getStrokeFromObject = true;
        series2.tooltip.background.strokeWidth = 3;
        series2.sequencedInterpolation = true;
        series2.fillOpacity = 0.6;
        series2.stacked = true;
        series2.strokeWidth = 2;

        var series3 = chart.series.push(new am4charts.LineSeries());
        series3.name = "bicycles";
        series3.dataFields.dateX = "year";
        series3.dataFields.valueY = "bicycles";
        series3.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
        series3.tooltipText = "[#000]{valueY.value}[/]";
        series3.tooltip.background.fill = am4core.color("#FFF");
        series3.tooltip.getFillFromObject = false;
        series3.tooltip.getStrokeFromObject = true;
        series3.tooltip.background.strokeWidth = 3;
        series3.sequencedInterpolation = true;
        series3.fillOpacity = 0.6;
        series3.defaultState.transitionDuration = 1000;
        series3.stacked = true;
        series3.strokeWidth = 2;

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.xAxis = dateAxis;

        // Add a legend
        chart.legend = new am4charts.Legend();
        chart.legend.position = "top";

        // axis ranges
        var range = dateAxis.axisRanges.create();
        range.date = new Date(2001, 1, 1);
        range.endDate = new Date(2003, 1, 1);
        range.axisFill.fill = chart.colors.getIndex(7);
        range.axisFill.fillOpacity = 0.2;

        range.label.text = "Fines for speeding increased";
        range.label.inside = true;
        range.label.rotation = 90;
        range.label.horizontalCenter = "right";
        range.label.verticalCenter = "bottom";

        var range2 = dateAxis.axisRanges.create();
        range2.date = new Date(2007, 1, 1);
        range2.grid.stroke = chart.colors.getIndex(7);
        range2.grid.strokeOpacity = 0.6;
        range2.grid.strokeDasharray = "5,2";


        range2.label.text = "Motorcycle fee introduced";
        range2.label.inside = true;
        range2.label.rotation = 90;
        range2.label.horizontalCenter = "right";
        range2.label.verticalCenter = "bottom";
        }



  var amsolidgauge=$("#am-solid-gauge");
      if(amsolidgauge.length){

        // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create("am-solid-gauge", am4charts.RadarChart);

      // Add data
      chart.data = [{
        "category": "Research",
        "value": 80,
        "full": 100
      }, {
        "category": "Marketing",
        "value": 35,
        "full": 100
      }, {
        "category": "Distribution",
        "value": 92,
        "full": 100
      }, {
        "category": "Human Resources",
        "value": 68,
        "full": 100
      }];

      // Make chart not full circle
      chart.startAngle = -90;
      chart.endAngle = 180;
      chart.innerRadius = am4core.percent(20);

      // Set number format
      chart.numberFormatter.numberFormat = "#.#'%'";

      // Create axes
      var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "category";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.grid.template.strokeOpacity = 0;
      categoryAxis.renderer.labels.template.horizontalCenter = "right";
      categoryAxis.renderer.labels.template.fontWeight = 500;
      categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
        return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
      });
      categoryAxis.renderer.minGridDistance = 10;

      var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.grid.template.strokeOpacity = 0;
      valueAxis.min = 0;
      valueAxis.max = 100;
      valueAxis.strictMinMax = true;

      // Create series
      var series1 = chart.series.push(new am4charts.RadarColumnSeries());
      series1.dataFields.valueX = "full";
      series1.dataFields.categoryY = "category";
      series1.clustered = false;
      series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
      series1.columns.template.fillOpacity = 0.08;
      series1.columns.template.cornerRadiusTopLeft = 20;
      series1.columns.template.strokeWidth = 0;
      series1.columns.template.radarColumn.cornerRadius = 20;

      var series2 = chart.series.push(new am4charts.RadarColumnSeries());
      series2.dataFields.valueX = "value";
      series2.dataFields.categoryY = "category";
      series2.clustered = false;
      series2.columns.template.strokeWidth = 0;
      series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
      series2.columns.template.radarColumn.cornerRadius = 20;

      series2.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });

      // Add cursor
      chart.cursor = new am4charts.RadarCursor();

    }

// am-date-based-data
  var amdatebaseddata=$("#am-date-based-data");
      if(amdatebaseddata.length){
          // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create("am-date-based-data", am4charts.XYChart);

      // Add data
      chart.data = [{
        "date": "2012-07-27",
        "value": 13
      }, {
        "date": "2012-07-28",
        "value": 11
      }, {
        "date": "2012-07-29",
        "value": 15
      }, {
        "date": "2012-07-30",
        "value": 16
      }, {
        "date": "2012-07-31",
        "value": 18
      }, {
        "date": "2012-08-01",
        "value": 13
      }, {
        "date": "2012-08-02",
        "value": 22
      }, {
        "date": "2012-08-03",
        "value": 23
      }, {
        "date": "2012-08-04",
        "value": 20
      }, {
        "date": "2012-08-05",
        "value": 17
      }, {
        "date": "2012-08-06",
        "value": 16
      }, {
        "date": "2012-08-07",
        "value": 18
      }, {
        "date": "2012-08-08",
        "value": 21
      }, {
        "date": "2012-08-09",
        "value": 26
      }, {
        "date": "2012-08-10",
        "value": 24
      }, {
        "date": "2012-08-11",
        "value": 29
      }, {
        "date": "2012-08-12",
        "value": 32
      }, {
        "date": "2012-08-13",
        "value": 18
      }, {
        "date": "2012-08-14",
        "value": 24
      }, {
        "date": "2012-08-15",
        "value": 22
      }, {
        "date": "2012-08-16",
        "value": 18
      }, {
        "date": "2012-08-17",
        "value": 19
      }, {
        "date": "2012-08-18",
        "value": 14
      }, {
        "date": "2012-08-19",
        "value": 15
      }, {
        "date": "2012-08-20",
        "value": 12
      }, {
        "date": "2012-08-21",
        "value": 8
      }, {
        "date": "2012-08-22",
        "value": 9
      }, {
        "date": "2012-08-23",
        "value": 8
      }, {
        "date": "2012-08-24",
        "value": 7
      }, {
        "date": "2012-08-25",
        "value": 5
      }, {
        "date": "2012-08-26",
        "value": 11
      }, {
        "date": "2012-08-27",
        "value": 13
      }, {
        "date": "2012-08-28",
        "value": 18
      }, {
        "date": "2012-08-29",
        "value": 20
      }, {
        "date": "2012-08-30",
        "value": 29
      }, {
        "date": "2012-08-31",
        "value": 33
      }, {
        "date": "2012-09-01",
        "value": 42
      }, {
        "date": "2012-09-02",
        "value": 35
      }, {
        "date": "2012-09-03",
        "value": 31
      }, {
        "date": "2012-09-04",
        "value": 47
      }, {
        "date": "2012-09-05",
        "value": 52
      }, {
        "date": "2012-09-06",
        "value": 46
      }, {
        "date": "2012-09-07",
        "value": 41
      }, {
        "date": "2012-09-08",
        "value": 43
      }, {
        "date": "2012-09-09",
        "value": 40
      }, {
        "date": "2012-09-10",
        "value": 39
      }, {
        "date": "2012-09-11",
        "value": 34
      }, {
        "date": "2012-09-12",
        "value": 29
      }, {
        "date": "2012-09-13",
        "value": 34
      }, {
        "date": "2012-09-14",
        "value": 37
      }, {
        "date": "2012-09-15",
        "value": 42
      }, {
        "date": "2012-09-16",
        "value": 49
      }, {
        "date": "2012-09-17",
        "value": 46
      }, {
        "date": "2012-09-18",
        "value": 47
      }, {
        "date": "2012-09-19",
        "value": 55
      }, {
        "date": "2012-09-20",
        "value": 59
      }, {
        "date": "2012-09-21",
        "value": 58
      }, {
        "date": "2012-09-22",
        "value": 57
      }, {
        "date": "2012-09-23",
        "value": 61
      }, {
        "date": "2012-09-24",
        "value": 59
      }, {
        "date": "2012-09-25",
        "value": 67
      }, {
        "date": "2012-09-26",
        "value": 65
      }, {
        "date": "2012-09-27",
        "value": 61
      }, {
        "date": "2012-09-28",
        "value": 66
      }, {
        "date": "2012-09-29",
        "value": 69
      }, {
        "date": "2012-09-30",
        "value": 71
      }, {
        "date": "2012-10-01",
        "value": 67
      }, {
        "date": "2012-10-02",
        "value": 63
      }, {
        "date": "2012-10-03",
        "value": 46
      }, {
        "date": "2012-10-04",
        "value": 32
      }, {
        "date": "2012-10-05",
        "value": 21
      }, {
        "date": "2012-10-06",
        "value": 18
      }, {
        "date": "2012-10-07",
        "value": 21
      }, {
        "date": "2012-10-08",
        "value": 28
      }, {
        "date": "2012-10-09",
        "value": 27
      }, {
        "date": "2012-10-10",
        "value": 36
      }, {
        "date": "2012-10-11",
        "value": 33
      }, {
        "date": "2012-10-12",
        "value": 31
      }, {
        "date": "2012-10-13",
        "value": 30
      }, {
        "date": "2012-10-14",
        "value": 34
      }, {
        "date": "2012-10-15",
        "value": 38
      }, {
        "date": "2012-10-16",
        "value": 37
      }, {
        "date": "2012-10-17",
        "value": 44
      }, {
        "date": "2012-10-18",
        "value": 49
      }, {
        "date": "2012-10-19",
        "value": 53
      }, {
        "date": "2012-10-20",
        "value": 57
      }, {
        "date": "2012-10-21",
        "value": 60
      }, {
        "date": "2012-10-22",
        "value": 61
      }, {
        "date": "2012-10-23",
        "value": 69
      }, {
        "date": "2012-10-24",
        "value": 67
      }, {
        "date": "2012-10-25",
        "value": 72
      }, {
        "date": "2012-10-26",
        "value": 77
      }, {
        "date": "2012-10-27",
        "value": 75
      }, {
        "date": "2012-10-28",
        "value": 70
      }, {
        "date": "2012-10-29",
        "value": 72
      }, {
        "date": "2012-10-30",
        "value": 70
      }, {
        "date": "2012-10-31",
        "value": 72
      }, {
        "date": "2012-11-01",
        "value": 73
      }, {
        "date": "2012-11-02",
        "value": 67
      }, {
        "date": "2012-11-03",
        "value": 68
      }, {
        "date": "2012-11-04",
        "value": 65
      }, {
        "date": "2012-11-05",
        "value": 71
      }, {
        "date": "2012-11-06",
        "value": 75
      }, {
        "date": "2012-11-07",
        "value": 74
      }, {
        "date": "2012-11-08",
        "value": 71
      }, {
        "date": "2012-11-09",
        "value": 76
      }, {
        "date": "2012-11-10",
        "value": 77
      }, {
        "date": "2012-11-11",
        "value": 81
      }, {
        "date": "2012-11-12",
        "value": 83
      }, {
        "date": "2012-11-13",
        "value": 80
      }, {
        "date": "2012-11-14",
        "value": 81
      }, {
        "date": "2012-11-15",
        "value": 87
      }, {
        "date": "2012-11-16",
        "value": 82
      }, {
        "date": "2012-11-17",
        "value": 86
      }, {
        "date": "2012-11-18",
        "value": 80
      }, {
        "date": "2012-11-19",
        "value": 87
      }, {
        "date": "2012-11-20",
        "value": 83
      }, {
        "date": "2012-11-21",
        "value": 85
      }, {
        "date": "2012-11-22",
        "value": 84
      }, {
        "date": "2012-11-23",
        "value": 82
      }, {
        "date": "2012-11-24",
        "value": 73
      }, {
        "date": "2012-11-25",
        "value": 71
      }, {
        "date": "2012-11-26",
        "value": 75
      }, {
        "date": "2012-11-27",
        "value": 79
      }, {
        "date": "2012-11-28",
        "value": 70
      }, {
        "date": "2012-11-29",
        "value": 73
      }, {
        "date": "2012-11-30",
        "value": 61
      }, {
        "date": "2012-12-01",
        "value": 62
      }, {
        "date": "2012-12-02",
        "value": 66
      }, {
        "date": "2012-12-03",
        "value": 65
      }, {
        "date": "2012-12-04",
        "value": 73
      }, {
        "date": "2012-12-05",
        "value": 79
      }, {
        "date": "2012-12-06",
        "value": 78
      }, {
        "date": "2012-12-07",
        "value": 78
      }, {
        "date": "2012-12-08",
        "value": 78
      }, {
        "date": "2012-12-09",
        "value": 74
      }, {
        "date": "2012-12-10",
        "value": 73
      }, {
        "date": "2012-12-11",
        "value": 75
      }, {
        "date": "2012-12-12",
        "value": 70
      }, {
        "date": "2012-12-13",
        "value": 77
      }, {
        "date": "2012-12-14",
        "value": 67
      }, {
        "date": "2012-12-15",
        "value": 62
      }, {
        "date": "2012-12-16",
        "value": 64
      }, {
        "date": "2012-12-17",
        "value": 61
      }, {
        "date": "2012-12-18",
        "value": 59
      }, {
        "date": "2012-12-19",
        "value": 53
      }, {
        "date": "2012-12-20",
        "value": 54
      }, {
        "date": "2012-12-21",
        "value": 56
      }, {
        "date": "2012-12-22",
        "value": 59
      }, {
        "date": "2012-12-23",
        "value": 58
      }, {
        "date": "2012-12-24",
        "value": 55
      }, {
        "date": "2012-12-25",
        "value": 52
      }, {
        "date": "2012-12-26",
        "value": 54
      }, {
        "date": "2012-12-27",
        "value": 50
      }, {
        "date": "2012-12-28",
        "value": 50
      }, {
        "date": "2012-12-29",
        "value": 51
      }, {
        "date": "2012-12-30",
        "value": 52
      }, {
        "date": "2012-12-31",
        "value": 58
      }, {
        "date": "2013-01-01",
        "value": 60
      }, {
        "date": "2013-01-02",
        "value": 67
      }, {
        "date": "2013-01-03",
        "value": 64
      }, {
        "date": "2013-01-04",
        "value": 66
      }, {
        "date": "2013-01-05",
        "value": 60
      }, {
        "date": "2013-01-06",
        "value": 63
      }, {
        "date": "2013-01-07",
        "value": 61
      }, {
        "date": "2013-01-08",
        "value": 60
      }, {
        "date": "2013-01-09",
        "value": 65
      }, {
        "date": "2013-01-10",
        "value": 75
      }, {
        "date": "2013-01-11",
        "value": 77
      }, {
        "date": "2013-01-12",
        "value": 78
      }, {
        "date": "2013-01-13",
        "value": 70
      }, {
        "date": "2013-01-14",
        "value": 70
      }, {
        "date": "2013-01-15",
        "value": 73
      }, {
        "date": "2013-01-16",
        "value": 71
      }, {
        "date": "2013-01-17",
        "value": 74
      }, {
        "date": "2013-01-18",
        "value": 78
      }, {
        "date": "2013-01-19",
        "value": 85
      }, {
        "date": "2013-01-20",
        "value": 82
      }, {
        "date": "2013-01-21",
        "value": 83
      }, {
        "date": "2013-01-22",
        "value": 88
      }, {
        "date": "2013-01-23",
        "value": 85
      }, {
        "date": "2013-01-24",
        "value": 85
      }, {
        "date": "2013-01-25",
        "value": 80
      }, {
        "date": "2013-01-26",
        "value": 87
      }, {
        "date": "2013-01-27",
        "value": 84
      }, {
        "date": "2013-01-28",
        "value": 83
      }, {
        "date": "2013-01-29",
        "value": 84
      }, {
        "date": "2013-01-30",
        "value": 81
      }];

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "value";
      series.dataFields.dateX = "date";
      series.tooltipText = "{value}"
      series.strokeWidth = 2;
      series.minBulletDistance = 15;

      // Drop-shaped tooltips
      series.tooltip.background.cornerRadius = 20;
      series.tooltip.background.strokeOpacity = 0;
      series.tooltip.pointerOrientation = "vertical";
      series.tooltip.label.minWidth = 40;
      series.tooltip.label.minHeight = 40;
      series.tooltip.label.textAlign = "middle";
      series.tooltip.label.textValign = "middle";

      // Make bullets grow on hover
      var bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.strokeWidth = 2;
      bullet.circle.radius = 4;
      bullet.circle.fill = am4core.color("#fff");

      var bullethover = bullet.states.create("hover");
      bullethover.properties.scale = 1.3;

      // Make a panning cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "panXY";
      chart.cursor.xAxis = dateAxis;
      chart.cursor.snapToSeries = series;

      // Create vertical scrollbar and place it before the value axis
      chart.scrollbarY = new am4core.Scrollbar();
      chart.scrollbarY.parent = chart.leftAxesContainer;
      chart.scrollbarY.toBack();

      // Create a horizontal scrollbar with previe and place it underneath the date axis
      chart.scrollbarX = new am4charts.XYChartScrollbar();
      chart.scrollbarX.series.push(series);
      chart.scrollbarX.parent = chart.bottomAxesContainer;

      chart.events.on("ready", function () {
        dateAxis.zoom({start:0.79, end:1});
      });
     }


 // morris-area
var amdurationonvalueaxis=$("#am-duration-on-value-axis");
  if(amdurationonvalueaxis.length){
    // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create("am-duration-on-value-axis", am4charts.XYChart);

      chart.colors.step = 2;
      chart.maskBullets = false;

      // Add data
      chart.data = [{
          "date": "2012-01-01",
          "distance": 227,
          "townName": "New York",
          "townName2": "New York",
          "townSize": 12,
          "latitude": 40.71,
          "duration": 408
      }, {
          "date": "2012-01-02",
          "distance": 371,
          "townName": "Washington",
          "townSize": 7,
          "latitude": 38.89,
          "duration": 482
      }, {
          "date": "2012-01-03",
          "distance": 433,
          "townName": "Wilmington",
          "townSize": 3,
          "latitude": 34.22,
          "duration": 562
      }, {
          "date": "2012-01-04",
          "distance": 345,
          "townName": "Jacksonville",
          "townSize": 3.5,
          "latitude": 30.35,
          "duration": 379
      }, {
          "date": "2012-01-05",
          "distance": 480,
          "townName": "Miami",
          "townName2": "Miami",
          "townSize": 5,
          "latitude": 25.83,
          "duration": 501
      }, {
          "date": "2012-01-06",
          "distance": 386,
          "townName": "Tallahassee",
          "townSize": 3.5,
          "latitude": 30.46,
          "duration": 443
      }, {
          "date": "2012-01-07",
          "distance": 348,
          "townName": "New Orleans",
          "townSize": 5,
          "latitude": 29.94,
          "duration": 405
      }, {
          "date": "2012-01-08",
          "distance": 238,
          "townName": "Houston",
          "townName2": "Houston",
          "townSize": 8,
          "latitude": 29.76,
          "duration": 309
      }, {
          "date": "2012-01-09",
          "distance": 218,
          "townName": "Dalas",
          "townSize": 8,
          "latitude": 32.8,
          "duration": 287
      }, {
          "date": "2012-01-10",
          "distance": 349,
          "townName": "Oklahoma City",
          "townSize": 5,
          "latitude": 35.49,
          "duration": 485
      }, {
          "date": "2012-01-11",
          "distance": 603,
          "townName": "Kansas City",
          "townSize": 5,
          "latitude": 39.1,
          "duration": 890
      }, {
          "date": "2012-01-12",
          "distance": 534,
          "townName": "Denver",
          "townName2": "Denver",
          "townSize": 9,
          "latitude": 39.74,
          "duration": 810
      }, {
          "date": "2012-01-13",
          "townName": "Salt Lake City",
          "townSize": 6,
          "distance": 425,
          "duration": 670,
          "latitude": 40.75,
          "dashLength": 8,
          "alpha": 0.4
      }, {
          "date": "2012-01-14",
          "latitude": 36.1,
          "duration": 470,
          "townName": "Las Vegas",
          "townName2": "Las Vegas"
      }, {
          "date": "2012-01-15"
      }, {
          "date": "2012-01-16"
      }, {
          "date": "2012-01-17"
      }];

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.dataFields.category = "category";
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.minGridDistance = 50;
      dateAxis.renderer.grid.template.disabled = true;
      dateAxis.renderer.fullWidthTooltip = true;

      var distanceAxis = chart.yAxes.push(new am4charts.ValueAxis());
      distanceAxis.title.text = "Distance";
      distanceAxis.renderer.grid.template.disabled = true;

      var durationAxis = chart.yAxes.push(new am4charts.DurationAxis());
      durationAxis.title.text = "Duration";
      durationAxis.baseUnit = "minute";
      durationAxis.renderer.grid.template.disabled = true;
      durationAxis.renderer.opposite = true;

      durationAxis.durationFormatter.durationFormat = "hh'h' mm'min'";

      var latitudeAxis = chart.yAxes.push(new am4charts.ValueAxis());
      latitudeAxis.renderer.grid.template.disabled = true;
      latitudeAxis.renderer.labels.template.disabled = true;

      // Create series
      var distanceSeries = chart.series.push(new am4charts.ColumnSeries());
      distanceSeries.dataFields.valueY = "distance";
      distanceSeries.dataFields.dateX = "date";
      distanceSeries.yAxis = distanceAxis;
      distanceSeries.tooltipText = "{valueY} miles";
      distanceSeries.name = "Distance";
      distanceSeries.columns.template.fillOpacity = 0.7;
      distanceSeries.columns.template.propertyFields.strokeDasharray = "dashLength";
      distanceSeries.columns.template.propertyFields.fillOpacity = "alpha";

      var disatnceState = distanceSeries.columns.template.states.create("hover");
      disatnceState.properties.fillOpacity = 0.9;

      var durationSeries = chart.series.push(new am4charts.LineSeries());
      durationSeries.dataFields.valueY = "duration";
      durationSeries.dataFields.dateX = "date";
      durationSeries.yAxis = durationAxis;
      durationSeries.name = "Duration";
      durationSeries.strokeWidth = 2;
      durationSeries.propertyFields.strokeDasharray = "dashLength";
      durationSeries.tooltipText = "{valueY.formatDuration()}";

      var durationBullet = durationSeries.bullets.push(new am4charts.Bullet());
      var durationRectangle = durationBullet.createChild(am4core.Rectangle);
      durationBullet.horizontalCenter = "middle";
      durationBullet.verticalCenter = "middle";
      durationBullet.width = 7;
      durationBullet.height = 7;
      durationRectangle.width = 7;
      durationRectangle.height = 7;

      var durationState = durationBullet.states.create("hover");
      durationState.properties.scale = 1.2;

      var latitudeSeries = chart.series.push(new am4charts.LineSeries());
      latitudeSeries.dataFields.valueY = "latitude";
      latitudeSeries.dataFields.dateX = "date";
      latitudeSeries.yAxis = latitudeAxis;
      latitudeSeries.name = "Duration";
      latitudeSeries.strokeWidth = 2;
      latitudeSeries.propertyFields.strokeDasharray = "dashLength";
      latitudeSeries.tooltipText = "Latitude: {valueY} ({townName})";

      var latitudeBullet = latitudeSeries.bullets.push(new am4charts.CircleBullet());
      latitudeBullet.circle.fill = am4core.color("#fff");
      latitudeBullet.circle.strokeWidth = 2;
      latitudeBullet.circle.propertyFields.radius = "townSize";

      var latitudeState = latitudeBullet.states.create("hover");
      latitudeState.properties.scale = 1.2;

      var latitudeLabel = latitudeSeries.bullets.push(new am4charts.LabelBullet());
      latitudeLabel.label.text = "{townName2}";
      latitudeLabel.label.horizontalCenter = "left";
      latitudeLabel.label.dx = 14;

      // Add legend
      chart.legend = new am4charts.Legend();

      // Add cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.fullWidthLineX = true;
      chart.cursor.xAxis = dateAxis;
      chart.cursor.lineX.strokeOpacity = 0;
      chart.cursor.lineX.fill = am4core.color("#000");
      chart.cursor.lineX.fillOpacity = 0.1;
}



// am-multiple-date-axes
var ammultipledateaxes=$("#am-multiple-date-axes");
  if(ammultipledateaxes.length){
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart
    var chart = am4core.create("am-multiple-date-axes", am4charts.XYChart);

    var data = [];
    var price1 = 1000, price2 = 1200;
    var quantity = 30000;
    for (var i = 0; i < 360; i++) {
      price1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
      data.push({ date1: new Date(2015, 0, i), price1: price1 });
    }
    for (var i = 0; i < 360; i++) {
      price2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
      data.push({ date2: new Date(2017, 0, i), price2: price2 });
    }

    chart.data = data;

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.labels.template.fill = am4core.color("#e59165");

    var dateAxis2 = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis2.renderer.grid.template.location = 0;
    dateAxis2.renderer.labels.template.fill = am4core.color("#dfcc64");

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.labels.template.fill = am4core.color("#e59165");

    valueAxis.renderer.minWidth = 60;

    var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.tooltip.disabled = true;
    valueAxis2.renderer.grid.template.strokeDasharray = "2,3";
    valueAxis2.renderer.labels.template.fill = am4core.color("#dfcc64");
    valueAxis2.renderer.minWidth = 60;

    var series = chart.series.push(new am4charts.LineSeries());
    series.name = "2016";
    series.dataFields.dateX = "date1";
    series.dataFields.valueY = "price1";
    series.tooltipText = "{valueY.value}";
    series.fill = am4core.color("#e59165");
    series.stroke = am4core.color("#e59165");
    //series.strokeWidth = 3;

    var series2 = chart.series.push(new am4charts.LineSeries());
    series2.name = "2017";
    series2.dataFields.dateX = "date2";
    series2.dataFields.valueY = "price2";
    series2.yAxis = valueAxis2;
    series2.xAxis = dateAxis2;
    series2.tooltipText = "{valueY.value}";
    series2.fill = am4core.color("#dfcc64");
    series2.stroke = am4core.color("#dfcc64");
    //series2.strokeWidth = 3;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis2;

    var scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    chart.legend = new am4charts.Legend();
    chart.legend.parent = chart.plotContainer;
    chart.legend.zIndex = 100;

    valueAxis2.renderer.grid.template.strokeOpacity = 0.07;
    dateAxis2.renderer.grid.template.strokeOpacity = 0.07;
    dateAxis.renderer.grid.template.strokeOpacity = 0.07;
    valueAxis.renderer.grid.template.strokeOpacity = 0.07;
}


// am-candlestick-chart
var amcandlestickchart=$("#am-candlestick-chart");
  if(amcandlestickchart.length){
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("am-candlestick-chart", am4charts.XYChart);
    chart.paddingRight = 20;

    chart.dateFormatter.inputDateFormat = "YYYY-MM-dd";

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    var series = chart.series.push(new am4charts.CandlestickSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "close";
    series.dataFields.openValueY = "open";
    series.dataFields.lowValueY = "low";
    series.dataFields.highValueY = "high";
    series.simplifiedProcessing = true;
    series.tooltipText = "Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}";

    chart.cursor = new am4charts.XYCursor();

    // a separate series for scrollbar
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.dateX = "date";
    lineSeries.dataFields.valueY = "close";
    // need to set on default state, as initially series is "show"
    lineSeries.defaultState.properties.visible = false;

    // hide from legend too (in case there is one)
    lineSeries.hiddenInLegend = true;
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeOpacity = 0.5;

    var scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(lineSeries);
    chart.scrollbarX = scrollbarX;

    chart.data = [ {
        "date": "2011-08-01",
        "open": "136.65",
        "high": "136.96",
        "low": "134.15",
        "close": "136.49"
      }, {
        "date": "2011-08-02",
        "open": "135.26",
        "high": "135.95",
        "low": "131.50",
        "close": "131.85"
      }, {
        "date": "2011-08-05",
        "open": "132.90",
        "high": "135.27",
        "low": "128.30",
        "close": "135.25"
      }, {
        "date": "2011-08-06",
        "open": "134.94",
        "high": "137.24",
        "low": "132.63",
        "close": "135.03"
      }, {
        "date": "2011-08-07",
        "open": "136.76",
        "high": "136.86",
        "low": "132.00",
        "close": "134.01"
      }, {
        "date": "2011-08-08",
        "open": "131.11",
        "high": "133.00",
        "low": "125.09",
        "close": "126.39"
      }, {
        "date": "2011-08-09",
        "open": "123.12",
        "high": "127.75",
        "low": "120.30",
        "close": "125.00"
      }, {
        "date": "2011-08-12",
        "open": "128.32",
        "high": "129.35",
        "low": "126.50",
        "close": "127.79"
      }, {
        "date": "2011-08-13",
        "open": "128.29",
        "high": "128.30",
        "low": "123.71",
        "close": "124.03"
      }, {
        "date": "2011-08-14",
        "open": "122.74",
        "high": "124.86",
        "low": "119.65",
        "close": "119.90"
      }, {
        "date": "2011-08-15",
        "open": "117.01",
        "high": "118.50",
        "low": "111.62",
        "close": "117.05"
      }, {
        "date": "2011-08-16",
        "open": "122.01",
        "high": "123.50",
        "low": "119.82",
        "close": "122.06"
      }, {
        "date": "2011-08-19",
        "open": "123.96",
        "high": "124.50",
        "low": "120.50",
        "close": "122.22"
      }, {
        "date": "2011-08-20",
        "open": "122.21",
        "high": "128.96",
        "low": "121.00",
        "close": "127.57"
      }, {
        "date": "2011-08-21",
        "open": "131.22",
        "high": "132.75",
        "low": "130.33",
        "close": "132.51"
      }, {
        "date": "2011-08-22",
        "open": "133.09",
        "high": "133.34",
        "low": "129.76",
        "close": "131.07"
      }, {
        "date": "2011-08-23",
        "open": "130.53",
        "high": "135.37",
        "low": "129.81",
        "close": "135.30"
      }, {
        "date": "2011-08-26",
        "open": "133.39",
        "high": "134.66",
        "low": "132.10",
        "close": "132.25"
      }, {
        "date": "2011-08-27",
        "open": "130.99",
        "high": "132.41",
        "low": "126.63",
        "close": "126.82"
      }, {
        "date": "2011-08-28",
        "open": "129.88",
        "high": "134.18",
        "low": "129.54",
        "close": "134.08"
      }, {
        "date": "2011-08-29",
        "open": "132.67",
        "high": "138.25",
        "low": "132.30",
        "close": "136.25"
      }, {
        "date": "2011-08-30",
        "open": "139.49",
        "high": "139.65",
        "low": "137.41",
        "close": "138.48"
      }, {
        "date": "2011-09-03",
        "open": "139.94",
        "high": "145.73",
        "low": "139.84",
        "close": "144.16"
      }, {
        "date": "2011-09-04",
        "open": "144.97",
        "high": "145.84",
        "low": "136.10",
        "close": "136.76"
      }, {
        "date": "2011-09-05",
        "open": "135.56",
        "high": "137.57",
        "low": "132.71",
        "close": "135.01"
      }, {
        "date": "2011-09-06",
        "open": "132.01",
        "high": "132.30",
        "low": "130.00",
        "close": "131.77"
      }, {
        "date": "2011-09-09",
        "open": "136.99",
        "high": "138.04",
        "low": "133.95",
        "close": "136.71"
      }, {
        "date": "2011-09-10",
        "open": "137.90",
        "high": "138.30",
        "low": "133.75",
        "close": "135.49"
      }, {
        "date": "2011-09-11",
        "open": "135.99",
        "high": "139.40",
        "low": "135.75",
        "close": "136.85"
      }, {
        "date": "2011-09-12",
        "open": "138.83",
        "high": "139.00",
        "low": "136.65",
        "close": "137.20"
      }, {
        "date": "2011-09-13",
        "open": "136.57",
        "high": "138.98",
        "low": "136.20",
        "close": "138.81"
      }, {
        "date": "2011-09-16",
        "open": "138.99",
        "high": "140.59",
        "low": "137.60",
        "close": "138.41"
      }, {
        "date": "2011-09-17",
        "open": "139.06",
        "high": "142.85",
        "low": "137.83",
        "close": "140.92"
      }, {
        "date": "2011-09-18",
        "open": "143.02",
        "high": "143.16",
        "low": "139.40",
        "close": "140.77"
      }, {
        "date": "2011-09-19",
        "open": "140.15",
        "high": "141.79",
        "low": "139.32",
        "close": "140.31"
      }, {
        "date": "2011-09-20",
        "open": "141.14",
        "high": "144.65",
        "low": "140.31",
        "close": "144.15"
      }, {
        "date": "2011-09-23",
        "open": "146.73",
        "high": "149.85",
        "low": "146.65",
        "close": "148.28"
      }, {
        "date": "2011-09-24",
        "open": "146.84",
        "high": "153.22",
        "low": "146.82",
        "close": "153.18"
      }, {
        "date": "2011-09-25",
        "open": "154.47",
        "high": "155.00",
        "low": "151.25",
        "close": "152.77"
      }, {
        "date": "2011-09-26",
        "open": "153.77",
        "high": "154.52",
        "low": "152.32",
        "close": "154.50"
      }, {
        "date": "2011-09-27",
        "open": "153.44",
        "high": "154.60",
        "low": "152.75",
        "close": "153.47"
      }, {
        "date": "2011-09-30",
        "open": "154.63",
        "high": "157.41",
        "low": "152.93",
        "close": "156.34"
      }, {
        "date": "2011-10-01",
        "open": "156.55",
        "high": "158.59",
        "low": "155.89",
        "close": "158.45"
      }, {
        "date": "2011-10-02",
        "open": "157.78",
        "high": "159.18",
        "low": "157.01",
        "close": "157.92"
      }, {
        "date": "2011-10-03",
        "open": "158.00",
        "high": "158.08",
        "low": "153.50",
        "close": "156.24"
      }, {
        "date": "2011-10-04",
        "open": "158.37",
        "high": "161.58",
        "low": "157.70",
        "close": "161.45"
      }, {
        "date": "2011-10-07",
        "open": "163.49",
        "high": "167.91",
        "low": "162.97",
        "close": "167.91"
      }, {
        "date": "2011-10-08",
        "open": "170.20",
        "high": "171.11",
        "low": "166.68",
        "close": "167.86"
      }, {
        "date": "2011-10-09",
        "open": "167.55",
        "high": "167.88",
        "low": "165.60",
        "close": "166.79"
      }, {
        "date": "2011-10-10",
        "open": "169.49",
        "high": "171.88",
        "low": "153.21",
        "close": "162.23"
      }, {
        "date": "2011-10-11",
        "open": "163.01",
        "high": "167.28",
        "low": "161.80",
        "close": "167.25"
      }, {
        "date": "2011-10-14",
        "open": "167.98",
        "high": "169.57",
        "low": "163.50",
        "close": "166.98"
      }, {
        "date": "2011-10-15",
        "open": "165.54",
        "high": "170.18",
        "low": "165.15",
        "close": "169.58"
      }, {
        "date": "2011-10-16",
        "open": "172.69",
        "high": "173.04",
        "low": "169.18",
        "close": "172.75"
      }];
}


// am gauge
var amgauge=$("#am-gauge");
  if(amgauge.length){

    // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // create chart
        var chart = am4core.create("am-gauge", am4charts.GaugeChart);
        chart.innerRadius = am4core.percent(82);

        /**
         * Normal axis
         */

        var axis = chart.xAxes.push(new am4charts.ValueAxis());
        axis.min = 0;
        axis.max = 100;
        axis.strictMinMax = true;
        axis.renderer.radius = am4core.percent(80);
        axis.renderer.inside = true;
        axis.renderer.line.strokeOpacity = 1;
        axis.renderer.ticks.template.strokeOpacity = 1;
        axis.renderer.ticks.template.length = 10;
        axis.renderer.grid.template.disabled = true;
        axis.renderer.labels.template.radius = 40;
        axis.renderer.labels.template.adapter.add("text", function(text) {
          return text + "%";
        })

        /**
         * Axis for ranges
         */

        var colorSet = new am4core.ColorSet();

        var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
        axis2.min = 0;
        axis2.max = 100;
        axis2.renderer.innerRadius = 10
        axis2.strictMinMax = true;
        axis2.renderer.labels.template.disabled = true;
        axis2.renderer.ticks.template.disabled = true;
        axis2.renderer.grid.template.disabled = true;

        var range0 = axis2.axisRanges.create();
        range0.value = 0;
        range0.endValue = 50;
        range0.axisFill.fillOpacity = 1;
        range0.axisFill.fill = colorSet.getIndex(0);

        var range1 = axis2.axisRanges.create();
        range1.value = 50;
        range1.endValue = 100;
        range1.axisFill.fillOpacity = 1;
        range1.axisFill.fill = colorSet.getIndex(2);

        /**
         * Label
         */

        var label = chart.radarContainer.createChild(am4core.Label);
        label.isMeasured = false;
        label.fontSize = 45;
        label.x = am4core.percent(50);
        label.y = am4core.percent(100);
        label.horizontalCenter = "middle";
        label.verticalCenter = "bottom";
        label.text = "50%";


        /**
         * Hand
         */

        var hand = chart.hands.push(new am4charts.ClockHand());
        hand.axis = axis2;
        hand.innerRadius = am4core.percent(20);
        hand.startWidth = 10;
        hand.pin.disabled = true;
        hand.value = 50;

        hand.events.on("propertychanged", function(ev) {
          range0.endValue = ev.target.value;
          range1.value = ev.target.value;
          axis2.invalidate();
        });

        setInterval(() => {
          var value = Math.round(Math.random() * 100);
          label.text = value + "%";
          var animation = new am4core.Animation(hand, {
            property: "value",
            to: value
          }, 1000, am4core.ease.cubicOut).start();
        }, 2000);

}




var ammultipartgauge=$("#am-multi-part-gauge");
  if(ammultipartgauge.length){

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // create chart
    var chart = am4core.create("am-multi-part-gauge", am4charts.GaugeChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    chart.startAngle = 0;
    chart.endAngle = 360;

    function createAxis(min, max, start, end, color) {
      var axis = chart.xAxes.push(new am4charts.ValueAxis());
      axis.min = min;
      axis.max = max;
      axis.strictMinMax = true;
      axis.renderer.useChartAngles = false;
      axis.renderer.startAngle = start;
      axis.renderer.endAngle = end;
      axis.renderer.minGridDistance = 100;

      axis.renderer.line.strokeOpacity = 1;
      axis.renderer.line.strokeWidth = 10;
      axis.renderer.line.stroke = am4core.color(color);
      axis.renderer.ticks.template.stroke = am4core.color(color);

      axis.renderer.ticks.template.strokeOpacity = 1;
      axis.renderer.grid.template.disabled = true;
      axis.renderer.ticks.template.length = 10;
      
      return axis;
    }

    function createHand(axis) {
      var hand = chart.hands.push(new am4charts.ClockHand());
      hand.fill = axis.renderer.line.stroke;
      hand.stroke = axis.renderer.line.stroke;
      hand.axis = axis;
      hand.pin.disabled = true;
      hand.startWidth = 10;
      hand.endWidth = 0;
      hand.radius = am4core.percent(90);
      hand.innerRadius = am4core.percent(70);
      hand.value = 0;
      return hand;
    }

    var axis1 = createAxis(0, 100, -85, -5, "#EF6F6C");
    var axis2 = createAxis(0, 200, 5, 85, "#426A5A");
    var axis3 = createAxis(0, 20, 95, 175, "#7FB685");
    var axis4 = createAxis(0, 100, 185, 265, "#DDAE7E");

    var hand1 = createHand(axis1);
    var hand2 = createHand(axis2);
    var hand3 = createHand(axis3);
    var hand4 = createHand(axis4);

    setInterval(() => {
      hand1.showValue(Math.random() * hand1.axis.max, 1000, am4core.ease.cubicOut);
      hand2.showValue(Math.random() * hand2.axis.max, 1000, am4core.ease.cubicOut);
      hand3.showValue(Math.random() * hand3.axis.max, 1000, am4core.ease.cubicOut);
      hand4.showValue(Math.random() * hand4.axis.max, 1000, am4core.ease.cubicOut);
    }, 2000);

}


var ampolarscatter=$("#am-polar-scatter");
  if(ampolarscatter.length){
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    /* Create chart instance */
    var chart = am4core.create("am-polar-scatter", am4charts.RadarChart);

    /* Add data */
    chart.data = [{
      "country": "Lithuania",
      "litres": 501,
      "units": 250
    }, {
      "country": "Czech Republic",
      "litres": 301,
      "units": 222
    }, {
      "country": "Ireland",
      "litres": 266,
      "units": 179
    }, {
      "country": "Germany",
      "litres": 165,
      "units": 298
    }, {
      "country": "Australia",
      "litres": 139,
      "units": 299
    }, {
      "country": "Austria",
      "litres": 336,
      "units": 185
    }, {
      "country": "UK",
      "litres": 290,
      "units": 150
    }, {
      "country": "Belgium",
      "litres": 325,
      "units": 382
    }, {
      "country": "The Netherlands",
      "litres": 40,
      "units": 172
    }];

    /* Create axes */
    var xAxis = chart.xAxes.push(new am4charts.ValueAxis());
    xAxis.renderer.maxLabelPosition = 0.99;

    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.renderer.labels.template.verticalCenter = "bottom";
    yAxis.renderer.labels.template.horizontalCenter = "right";
    yAxis.renderer.maxLabelPosition = 0.99;

    /* Create and configure series */
    var series1 = chart.series.push(new am4charts.RadarSeries());
    series1.bullets.push(new am4charts.CircleBullet());
    series1.strokeOpacity = 0;
    series1.dataFields.valueX = "x";
    series1.dataFields.valueY = "y";
    series1.name = "Series #1";
    series1.sequencedInterpolation = true;
    series1.sequencedInterpolationDelay = 10;
    series1.data = [
      { "x": 83, "y": 5.1 },
      { "x": 44, "y": 5.8 },
      { "x": 76, "y": 9 },
      { "x": 2, "y": 1.4 },
      { "x": 100, "y": 8.3 },
      { "x": 96, "y": 1.7 },
      { "x": 68, "y": 3.9 },
      { "x": 0, "y": 3 },
      { "x": 100, "y": 4.1 },
      { "x": 16, "y": 5.5 },
      { "x": 71, "y": 6.8 },
      { "x": 100, "y": 7.9 },
      { "x": 9, "y": 6.8 },
      { "x": 85, "y": 8.3 },
      { "x": 51, "y": 6.7 },
      { "x": 95, "y": 3.8 },
      { "x": 95, "y": 4.4 },
      { "x": 1, "y": 0.2 },
      { "x": 107, "y": 9.7 },
      { "x": 50, "y": 4.2 },
      { "x": 42, "y": 9.2 },
      { "x": 35, "y": 8 },
      { "x": 44, "y": 6 },
      { "x": 64, "y": 0.7 },
      { "x": 53, "y": 3.3 },
      { "x": 92, "y": 4.1 },
      { "x": 43, "y": 7.3 },
      { "x": 15, "y": 7.5 },
      { "x": 43, "y": 4.3 },
      { "x": 90, "y": 9.9 }
    ];

    var series2 = chart.series.push(new am4charts.RadarSeries());
    series2.bullets.push(new am4charts.CircleBullet());
    series2.strokeOpacity = 0;
    series2.dataFields.valueX = "x";
    series2.dataFields.valueY = "y";
    series2.name = "Series #2";
    series2.sequencedInterpolation = true;
    series2.sequencedInterpolationDelay = 10;
    series2.data = [
      { "x": 178, "y": 1.3 },
      { "x": 129, "y": 3.4 },
      { "x": 99, "y": 2.4 },
      { "x": 80, "y": 9.9 },
      { "x": 118, "y": 9.4 },
      { "x": 103, "y": 8.7 },
      { "x": 91, "y": 4.2 },
      { "x": 151, "y": 1.2 },
      { "x": 168, "y": 5.2 },
      { "x": 168, "y": 1.6 },
      { "x": 152, "y": 1.2 },
      { "x": 149, "y": 3.4 },
      { "x": 182, "y": 8.8 },
      { "x": 106, "y": 6.7 },
      { "x": 111, "y": 9.2 },
      { "x": 130, "y": 6.3 },
      { "x": 147, "y": 2.9 },
      { "x": 81, "y": 8.1 },
      { "x": 138, "y": 7.7 },
      { "x": 107, "y": 3.9 },
      { "x": 124, "y": 0.7 },
      { "x": 130, "y": 2.6 },
      { "x": 86, "y": 9.2 },
      { "x": 169, "y": 7.5 },
      { "x": 122, "y": 9.9 },
      { "x": 100, "y": 3.8 },
      { "x": 172, "y": 4.1 },
      { "x": 140, "y": 7.3 },
      { "x": 161, "y": 2.3 },
      { "x": 141, "y": 0.9 }
    ];

    var series3 = chart.series.push(new am4charts.RadarSeries());
    series3.bullets.push(new am4charts.CircleBullet());
    series3.strokeOpacity = 0;
    series3.dataFields.valueX = "x";
    series3.dataFields.valueY = "y";
    series3.name = "Series #3";
    series3.sequencedInterpolation = true;
    series3.sequencedInterpolationDelay = 10;
    series3.data = [
      { "x": 419, "y": 4.9 },
      { "x": 417, "y": 5.5 },
      { "x": 434, "y": 0.1 },
      { "x": 344, "y": 2.5 },
      { "x": 279, "y": 7.5 },
      { "x": 307, "y": 8.4 },
      { "x": 279, "y": 9 },
      { "x": 220, "y": 8.4 },
      { "x": 204, "y": 8 },
      { "x": 446, "y": 0.9 },
      { "x": 397, "y": 8.9 },
      { "x": 351, "y": 1.7 },
      { "x": 393, "y": 0.7 },
      { "x": 254, "y": 1.8 },
      { "x": 260, "y": 0.4 },
      { "x": 300, "y": 3.5 },
      { "x": 199, "y": 2.7 },
      { "x": 182, "y": 5.8 },
      { "x": 173, "y": 2 },
      { "x": 201, "y": 9.7 },
      { "x": 288, "y": 1.2 },
      { "x": 333, "y": 7.4 },
      { "x": 308, "y": 1.9 },
      { "x": 330, "y": 8 },
      { "x": 408, "y": 1.7 },
      { "x": 274, "y": 0.8 },
      { "x": 296, "y": 3.1 },
      { "x": 279, "y": 4.3 },
      { "x": 379, "y": 5.6 },
      { "x": 175, "y": 6.8 }
    ];

    /* Add legend */
    chart.legend = new am4charts.Legend();

    /* Add cursor */
    chart.cursor = new am4charts.RadarCursor();
}



var amradarwithaxisbreak=$("#am-radar-with-axis-break");
  if(amradarwithaxisbreak.length){
     // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        var chart = am4core.create("am-radar-with-axis-break", am4charts.RadarChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        chart.innerRadius = am4core.percent(50);
        chart.startAngle = -80;
        chart.endAngle = 260;

        chart.data = [
          {
            country: "USA",
            visits: 23725
          },
          {
            country: "China",
            visits: 1882
          },
          {
            country: "Japan",
            visits: 1809
          },
          {
            country: "Germany",
            visits: 1322
          },
          {
            country: "UK",
            visits: 1122
          },
          {
            country: "France",
            visits: 1114
          },
          {
            country: "India",
            visits: 984
          },
          {
            country: "Spain",
            visits: 711
          },
          {
            country: "Netherlands",
            visits: 665
          },
          {
            country: "Russia",
            visits: 580
          },
          {
            country: "South Korea",
            visits: 443
          },
          {
            country: "Canada",
            visits: 441
          }
        ];

        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.labels.template.location = 0.5;
        categoryAxis.renderer.grid.template.strokeOpacity = 0.08;
        categoryAxis.renderer.tooltipLocation = 0.5;
        categoryAxis.tooltip.disabled = true;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.max = 24000;
        valueAxis.strictMinMax = true;
        valueAxis.renderer.minGridDistance = 30;
        valueAxis.renderer.grid.template.strokeOpacity = 0.08;
        valueAxis.tooltip.disabled = true;

        // axis break
        var axisBreak = valueAxis.axisBreaks.create();
        axisBreak.startValue = 2100;
        axisBreak.endValue = 22900;
        axisBreak.breakSize = 0.02;

        // make break expand on hover
        var hoverState = axisBreak.states.create("hover");
        hoverState.properties.breakSize = 1;
        hoverState.properties.opacity = 0.1;
        hoverState.transitionDuration = 1500;

        axisBreak.defaultState.transitionDuration = 1000;

        var series = chart.series.push(new am4charts.RadarColumnSeries());
        series.dataFields.categoryX = "country";
        series.dataFields.valueY = "visits";
        series.columns.template.tooltipText = "{valueY.value}";
        series.columns.template.tooltipY = 0;
        series.columns.template.strokeOpacity = 0;

        chart.seriesContainer.zIndex = -1;

        // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        series.columns.template.adapter.add("fill", (fill, target) => {
          return chart.colors.getIndex(target.dataItem.index);
        });

        let cursor = new am4charts.RadarCursor();
        cursor.innerRadius = am4core.percent(50);
        cursor.lineY.disabled = true;

        cursor.xAxis = categoryAxis;
        chart.cursor = cursor;
}



var amsvgfilters=$("#am-svg-filters");
  if(amsvgfilters.length){
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("am-svg-filters", am4charts.XYChart);

    // Add data
    chart.data = [{
      "year": "2007",
      "value1": 1691,
      "value2": 737
    }, {
      "year": "2008",
      "value1": 1098,
      "value2": 680,
      "value3": 910
    }, {
      "year": "2009",
      "value1": 975,
      "value2": 664,
      "value3": 670
    }, {
      "year": "2010",
      "value1": 1246,
      "value2": 648,
      "value3": 930
    }, {
      "year": "2011",
      "value1": 1218,
      "value2": 637,
      "value3": 1010
    }, {
      "year": "2012",
      "value1": 1913,
      "value2": 133,
      "value3": 1770
    }, {
      "year": "2013",
      "value1": 1299,
      "value2": 621,
      "value3": 820
    }, {
      "year": "2014",
      "value1": 1110,
      "value2": 10,
      "value3": 1050
    }, {
      "year": "2015",
      "value1": 765,
      "value2": 232,
      "value3": 650
    }, {
      "year": "2016",
      "value1": 1145,
      "value2": 219,
      "value3": 780
    }, {
      "year": "2017",
      "value1": 1163,
      "value2": 201,
      "value3": 700
    }, {
      "year": "2018",
      "value1": 1780,
      "value2": 85,
      "value3": 1470
    }, {
      "year": "2019",
      "value1": 1580,
      "value2": 285
    }];

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0.5;
    categoryAxis.renderer.minLabelPosition = 0.05;
    categoryAxis.renderer.maxLabelPosition = 0.95;


    var categoryAxisTooltip = categoryAxis.tooltip.background;
    categoryAxisTooltip.pointerLength = 0;
    categoryAxisTooltip.fillOpacity = 0.3;
    categoryAxisTooltip.filters.push(new am4core.BlurFilter).blur = 5;
    categoryAxis.tooltip.dy = 5;


    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.minLabelPosition = 0.05;
    valueAxis.renderer.maxLabelPosition = 0.95;

    var valueAxisTooltip = valueAxis.tooltip.background;
    valueAxisTooltip.pointerLength = 0;
    valueAxisTooltip.fillOpacity = 0.3;
    valueAxisTooltip.filters.push(new am4core.BlurFilter).blur = 5;


    // Create series
    var series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.categoryX = "year";
    series1.dataFields.valueY = "value1";
    series1.fillOpacity = 1;
    series1.stacked = true;

    var blur1 = new am4core.BlurFilter();
    blur1.blur = 20;
    series1.filters.push(blur1);

    var series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.categoryX = "year";
    series2.dataFields.valueY = "value2";
    series2.fillOpacity = 1;
    series2.stacked = true;

    var blur2 = new am4core.BlurFilter();
    blur2.blur = 20;
    series2.filters.push(blur2);

    var series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.categoryX = "year";
    series3.dataFields.valueY = "value3";
    series3.stroke = am4core.color("#fff");
    series3.strokeWidth = 2;
    series3.strokeDasharray = "3,3";
    series3.tooltipText = "{categoryX}\n---\n[bold font-size: 20]{valueY}[/]";
    series3.tooltip.pointerOrientation = "vertical";
    series3.tooltip.label.textAlign = "middle";

    var bullet3 = series3.bullets.push(new am4charts.CircleBullet())
    bullet3.circle.radius = 8;
    bullet3.fill = chart.colors.getIndex(3);
    bullet3.stroke = am4core.color("#fff");
    bullet3.strokeWidth = 3;

    var bullet3hover = bullet3.states.create("hover");
    bullet3hover.properties.scale = 1.2;

    var shadow3 = new am4core.DropShadowFilter();
    series3.filters.push(shadow3);

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.disabled = true;
    chart.cursor.lineY.disabled = true;
}


var columngraphsmultiple=$("#am-column-graphs-multiple");
  if(columngraphsmultiple.length){
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("am-column-graphs-multiple", am4charts.XYChart);

        // Add data
        chart.data = [{
          "date": "2013-01-16",
          "market1": 71,
          "market2": 75,
          "sales1": 5,
          "sales2": 8
        }, {
          "date": "2013-01-17",
          "market1": 74,
          "market2": 78,
          "sales1": 4,
          "sales2": 6
        }, {
          "date": "2013-01-18",
          "market1": 78,
          "market2": 88,
          "sales1": 5,
          "sales2": 2
        }, {
          "date": "2013-01-19",
          "market1": 85,
          "market2": 89,
          "sales1": 8,
          "sales2": 9
        }, {
          "date": "2013-01-20",
          "market1": 82,
          "market2": 89,
          "sales1": 9,
          "sales2": 6
        }, {
          "date": "2013-01-21",
          "market1": 83,
          "market2": 85,
          "sales1": 3,
          "sales2": 5
        }, {
          "date": "2013-01-22",
          "market1": 88,
          "market2": 92,
          "sales1": 5,
          "sales2": 7
        }, {
          "date": "2013-01-23",
          "market1": 85,
          "market2": 90,
          "sales1": 7,
          "sales2": 6
        }, {
          "date": "2013-01-24",
          "market1": 85,
          "market2": 91,
          "sales1": 9,
          "sales2": 5
        }, {
          "date": "2013-01-25",
          "market1": 80,
          "market2": 84,
          "sales1": 5,
          "sales2": 8
        }, {
          "date": "2013-01-26",
          "market1": 87,
          "market2": 92,
          "sales1": 4,
          "sales2": 8
        }, {
          "date": "2013-01-27",
          "market1": 84,
          "market2": 87,
          "sales1": 3,
          "sales2": 4
        }, {
          "date": "2013-01-28",
          "market1": 83,
          "market2": 88,
          "sales1": 5,
          "sales2": 7
        }, {
          "date": "2013-01-29",
          "market1": 84,
          "market2": 87,
          "sales1": 5,
          "sales2": 8
        }, {
          "date": "2013-01-30",
          "market1": 81,
          "market2": 85,
          "sales1": 4,
          "sales2": 7
        }];

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        //dateAxis.renderer.grid.template.location = 0;
        //dateAxis.renderer.minGridDistance = 30;

        var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis1.title.text = "Sales";

        var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis2.title.text = "Market Days";
        valueAxis2.renderer.opposite = true;
        valueAxis2.renderer.grid.template.disabled = true;

        // Create series
        var series1 = chart.series.push(new am4charts.ColumnSeries());
        series1.dataFields.valueY = "sales1";
        series1.dataFields.dateX = "date";
        series1.yAxis = valueAxis1;
        series1.name = "Target Sales";
        series1.tooltipText = "{name}\n[bold font-size: 20]${valueY}M[/]";
        series1.fill = chart.colors.getIndex(0);
        series1.strokeWidth = 0;
        series1.clustered = false;
        series1.columns.template.width = am4core.percent(40);

        var series2 = chart.series.push(new am4charts.ColumnSeries());
        series2.dataFields.valueY = "sales2";
        series2.dataFields.dateX = "date";
        series2.yAxis = valueAxis1;
        series2.name = "Actual Sales";
        series2.tooltipText = "{name}\n[bold font-size: 20]${valueY}M[/]";
        series2.fill = chart.colors.getIndex(0).lighten(0.5);
        series2.strokeWidth = 0;
        series2.clustered = false;
        series2.toBack();

        var series3 = chart.series.push(new am4charts.LineSeries());
        series3.dataFields.valueY = "market1";
        series3.dataFields.dateX = "date";
        series3.name = "Market Days";
        series3.strokeWidth = 2;
        series3.tensionX = 0.7;
        series3.yAxis = valueAxis2;
        series3.tooltipText = "{name}\n[bold font-size: 20]{valueY}[/]";

        var bullet3 = series3.bullets.push(new am4charts.CircleBullet());
        bullet3.circle.radius = 3;
        bullet3.circle.strokeWidth = 2;
        bullet3.circle.fill = am4core.color("#fff");

        var series4 = chart.series.push(new am4charts.LineSeries());
        series4.dataFields.valueY = "market2";
        series4.dataFields.dateX = "date";
        series4.name = "Market Days ALL";
        series4.strokeWidth = 2;
        series4.tensionX = 0.7;
        series4.yAxis = valueAxis2;
        series4.tooltipText = "{name}\n[bold font-size: 20]{valueY}[/]";
        series4.stroke = chart.colors.getIndex(0).lighten(0.5);
        series4.strokeDasharray = "3,3";

        var bullet4 = series4.bullets.push(new am4charts.CircleBullet());
        bullet4.circle.radius = 3;
        bullet4.circle.strokeWidth = 2;
        bullet4.circle.fill = am4core.color("#fff");

        // Add cursor
        chart.cursor = new am4charts.XYCursor();

        // Add legend
        chart.legend = new am4charts.Legend();
        chart.legend.position = "top";

        // Add scrollbar
        chart.scrollbarX = new am4charts.XYChartScrollbar();
        chart.scrollbarX.series.push(series1);
        chart.scrollbarX.series.push(series3);
        chart.scrollbarX.parent = chart.bottomAxesContainer;

}

var amcharttoimage=$("#am-chart-to-image");
  if(amcharttoimage.length){

    // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create("am-chart-to-image", am4charts.XYChart3D);

      // Add data
      chart.data = [{
        "country": "USA",
        "visits": 4025,
        "color": chart.colors.next()
      }, {
        "country": "China",
        "visits": 1882,
        "color": chart.colors.next()
      }, {
        "country": "Japan",
        "visits": 1809,
        "color": chart.colors.next()
      }, {
        "country": "Germany",
        "visits": 1322,
        "color": chart.colors.next()
      }, {
        "country": "UK",
        "visits": 1122,
        "color": chart.colors.next()
      }, {
        "country": "France",
        "visits": 1114,
        "color": chart.colors.next()
      }, {
        "country": "India",
        "visits": 984,
        "color": chart.colors.next()
      }, {
        "country": "Spain",
        "visits": 711,
        "color": chart.colors.next()
      }, {
        "country": "Netherlands",
        "visits": 665,
        "color": chart.colors.next()
      }, {
        "country": "Russia",
        "visits": 580,
        "color": chart.colors.next()
      }, {
        "country": "South Korea",
        "visits": 443,
        "color": chart.colors.next()
      }, {
        "country": "Canada",
        "visits": 441,
        "color": chart.colors.next()
      }, {
        "country": "Brazil",
        "visits": 395,
        "color": chart.colors.next()
      }, {
        "country": "Italy",
        "visits": 386,
        "color": chart.colors.next()
      }, {
        "country": "Australia",
        "visits": 384,
        "color": chart.colors.next()
      }, {
        "country": "Taiwan",
        "visits": 338,
        "color": chart.colors.next()
      }, {
        "country": "Poland",
        "visits": 328,
        "color": chart.colors.next()
      }];

      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.labels.template.rotation = 270;
      categoryAxis.renderer.labels.template.hideOversized = false;
      categoryAxis.renderer.minGridDistance = 20;
      categoryAxis.renderer.labels.template.horizontalCenter = "right";
      categoryAxis.renderer.labels.template.verticalCenter = "middle";
      categoryAxis.tooltip.label.rotation = 270;
      categoryAxis.tooltip.label.horizontalCenter = "right";
      categoryAxis.tooltip.label.verticalCenter = "middle";

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Countries";
      valueAxis.title.fontWeight = "bold";

      // Create series
      var series = chart.series.push(new am4charts.ColumnSeries3D());
      series.dataFields.valueY = "visits";
      series.dataFields.categoryX = "country";
      series.name = "Visits";
      series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
      series.columns.template.fillOpacity = .8;
      series.columns.template.propertyFields.fill = "color";

      var columnTemplate = series.columns.template;
      columnTemplate.strokeWidth = 2;
      columnTemplate.strokeOpacity = 1;
      columnTemplate.stroke = am4core.color("#FFFFFF");

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.lineX.strokeOpacity = 0;
      chart.cursor.lineY.strokeOpacity = 0;

      // Enable export
      chart.exporting.menu = new am4core.ExportMenu();

}



var ammapalonglines=$("#am-map-along-lines");
  if(ammapalonglines.length){

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create map instance
    var chart = am4core.create("am-map-along-lines", am4maps.MapChart);
    chart.geodata = am4geodata_worldLow;
    chart.projection = new am4maps.projections.Miller();
    chart.homeZoomLevel = 2.5;
    chart.homeGeoPoint = {
        latitude: 38,
        longitude: -60
    };

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.mapPolygons.template.fill = chart.colors.getIndex(0).lighten(0.5);
    polygonSeries.exclude = ["AQ"];

    // Add line bullets
    var cities = chart.series.push(new am4maps.MapImageSeries());
    cities.mapImages.template.nonScaling = true;

    var city = cities.mapImages.template.createChild(am4core.Circle);
    city.radius = 6;
    city.fill = chart.colors.getIndex(0).brighten(-0.2);
    city.strokeWidth = 2;
    city.stroke = am4core.color("#fff");

    function addCity(coords, title) {
        var city = cities.mapImages.create();
        city.latitude = coords.latitude;
        city.longitude = coords.longitude;
        city.tooltipText = title;
        return city;
    }

    var paris = addCity({ "latitude": 48.8567, "longitude": 2.3510 }, "Paris");
    var toronto = addCity({ "latitude": 43.8163, "longitude": -79.4287 }, "Toronto");
    var la = addCity({ "latitude": 34.3, "longitude": -118.15 }, "Los Angeles");
    var havana = addCity({ "latitude": 23, "longitude": -82 }, "Havana");

    // Add lines
    var lineSeries = chart.series.push(new am4maps.MapArcSeries());
    lineSeries.mapLines.template.line.strokeWidth = 2;
    lineSeries.mapLines.template.line.strokeOpacity = 0.5;
    lineSeries.mapLines.template.line.stroke = city.fill;
    lineSeries.mapLines.template.line.nonScalingStroke = true;
    lineSeries.mapLines.template.line.strokeDasharray = "1,1";
    lineSeries.zIndex = 10;

    var shadowLineSeries = chart.series.push(new am4maps.MapLineSeries());
    shadowLineSeries.mapLines.template.line.strokeOpacity = 0;
    shadowLineSeries.mapLines.template.line.nonScalingStroke = true;
    shadowLineSeries.mapLines.template.shortestDistance = false;
    shadowLineSeries.zIndex = 5;

    function addLine(from, to) {
        var line = lineSeries.mapLines.create();
        line.imagesToConnect = [from, to];
        line.line.controlPointDistance = -0.3;

        var shadowLine = shadowLineSeries.mapLines.create();
        shadowLine.imagesToConnect = [from, to];

        return line;
    }

    addLine(paris, toronto);
    addLine(toronto, la);
    addLine(la, havana);

    // Add plane
    var plane = lineSeries.mapLines.getIndex(0).lineObjects.create();
    plane.position = 0;
    plane.width = 48;
    plane.height = 48;

    plane.adapter.add("scale", (scale, target) => {
        return 0.5 * (1 - (Math.abs(0.5 - target.position)));
    })

    var planeImage = plane.createChild(am4core.Sprite);
    planeImage.scale = 0.08;
    planeImage.horizontalCenter = "middle";
    planeImage.verticalCenter = "middle";
    planeImage.path = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
    planeImage.fill = chart.colors.getIndex(2).brighten(-0.2);
    planeImage.strokeOpacity = 0;

    var shadowPlane = shadowLineSeries.mapLines.getIndex(0).lineObjects.create();
    shadowPlane.position = 0;
    shadowPlane.width = 48;
    shadowPlane.height = 48;

    var shadowPlaneImage = shadowPlane.createChild(am4core.Sprite);
    shadowPlaneImage.scale = 0.05;
    shadowPlaneImage.horizontalCenter = "middle";
    shadowPlaneImage.verticalCenter = "middle";
    shadowPlaneImage.path = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
    shadowPlaneImage.fill = am4core.color("#000");
    shadowPlaneImage.strokeOpacity = 0;

    shadowPlane.adapter.add("scale", (scale, target) => {
        target.opacity = (0.6 - (Math.abs(0.5 - target.position)));
        return 0.5 - 0.3 * (1 - (Math.abs(0.5 - target.position)));
    })

    // Plane animation
    var currentLine = 0;
    var direction = 1;
    function flyPlane() {

        // Get current line to attach plane to
        plane.mapLine = lineSeries.mapLines.getIndex(currentLine);
        plane.parent = lineSeries;
        shadowPlane.mapLine = shadowLineSeries.mapLines.getIndex(currentLine);
        shadowPlane.parent = shadowLineSeries;
        shadowPlaneImage.rotation = planeImage.rotation;

        // Set up animation
        var from, to;
        var numLines = lineSeries.mapLines.length;
        if (direction == 1) {
            from = 0
            to = 1;
            if (planeImage.rotation != 0) {
                planeImage.animate({ to: 0, property: "rotation" }, 1000).events.on("animationended", flyPlane);
                return;
            }
        }
        else {
            from = 1;
            to = 0;
            if (planeImage.rotation != 180) {
                planeImage.animate({ to: 180, property: "rotation" }, 1000).events.on("animationended", flyPlane);
                return;
            }
        }

        // Start the animation
        var animation = plane.animate({
            from: from,
            to: to,
            property: "position"
        }, 5000, am4core.ease.sinInOut);
        animation.events.on("animationended", flyPlane)
        /*animation.events.on("animationprogress", function(ev) {
          var progress = Math.abs(ev.progress - 0.5);
          //console.log(progress);
          //planeImage.scale += 0.2;
        });*/

        shadowPlane.animate({
            from: from,
            to: to,
            property: "position"
        }, 5000, am4core.ease.sinInOut);

        // Increment line, or reverse the direction
        currentLine += direction;
        if (currentLine < 0) {
            currentLine = 0;
            direction = 1;
        }
        else if ((currentLine + 1) > numLines) {
            currentLine = numLines - 1;
            direction = -1;
        }
    }

    // Go!
    flyPlane();

}


var ammapcurvedlines=$("#am-map-curved-lines");
  if(ammapcurvedlines.length){
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Define marker path
    var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

    // Create map instance
    var chart = am4core.create("am-map-curved-lines", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Add zoom control
    chart.zoomControl = new am4maps.ZoomControl();

    // Set initial zoom
    chart.homeZoomLevel = 2.5;
    chart.homeGeoPoint = {
      latitude: 51,
      longitude: -23
    };

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["AQ"];
    polygonSeries.useGeodata = true;
    polygonSeries.mapPolygons.template.fill = chart.colors.getIndex(0).lighten(0.5);

    // Add images
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
    var imageTemplate = imageSeries.mapImages.template;
    imageTemplate.tooltipText = "{title}";
    imageTemplate.nonScaling = true;

    var marker = imageTemplate.createChild(am4core.Sprite);
    marker.path = targetSVG;
    marker.horizontalCenter = "middle";
    marker.verticalCenter = "middle";
    marker.fill = chart.colors.getIndex(1).brighten(-0.5);

    imageTemplate.propertyFields.latitude = "latitude";
    imageTemplate.propertyFields.longitude = "longitude";
    imageSeries.data = [ {
      "id": "london",
      "svgPath": targetSVG,
      "title": "London",
      "latitude": 51.5002,
      "longitude": -0.1262,
      "scale": 1
    }, {
      "svgPath": targetSVG,
      "title": "Brussels",
      "latitude": 50.8371,
      "longitude": 4.3676,
      "scale": 0.5
    }, {
      "svgPath": targetSVG,
      "title": "Prague",
      "latitude": 50.0878,
      "longitude": 14.4205,
      "scale": 0.5
    }, {
      "svgPath": targetSVG,
      "title": "Athens",
      "latitude": 37.9792,
      "longitude": 23.7166,
      "scale": 0.5
    }, {
      "svgPath": targetSVG,
      "title": "Reykjavik",
      "latitude": 64.1353,
      "longitude": -21.8952,
      "scale": 0.5
    }, {
      "svgPath": targetSVG,
      "title": "Dublin",
      "latitude": 53.3441,
      "longitude": -6.2675,
      "scale": 0.5
    }, {
      "svgPath": targetSVG,
      "title": "Oslo",
      "latitude": 59.9138,
      "longitude": 10.7387,
      "scale": 0.5
    }, {
      "svgPath": targetSVG,
      "title": "Lisbon",
      "latitude": 38.7072,
      "longitude": -9.1355,
      "scale": 0.5
    }, {
      "svgPath": targetSVG,
      "title": "Moscow",
      "latitude": 55.7558,
      "longitude": 37.6176,
      "scale": 0.5
    }, {
      "svgPath": targetSVG,
      "title": "Belgrade",
      "latitude": 44.8048,
      "longitude": 20.4781,
      "scale": 0.5
    }, {
      "svgPath": targetSVG,
      "title": "Bratislava",
      "latitude": 48.2116,
      "longitude": 17.1547,
      "scale": 0.5
    }, {
      "svgPath": targetSVG,
      "title": "Ljubljana",
      "latitude": 46.0514,
      "longitude": 14.5060,
      "scale": 0.5
    }, {
      "svgPath": targetSVG,
      "title": "Madrid",
      "latitude": 40.4167,
      "longitude": -3.7033,
      "scale": 0.5
    }, {
      "svgPath": targetSVG,
      "title": "Stockholm",
      "latitude": 59.3328,
      "longitude": 18.0645,
      "scale": 0.5
    }, {
      "svgPath": targetSVG,
      "title": "Bern",
      "latitude": 46.9480,
      "longitude": 7.4481,
      "scale": 0.5
    }, {
      "svgPath": targetSVG,
      "title": "Kiev",
      "latitude": 50.4422,
      "longitude": 30.5367,
      "scale": 0.5
    }, {
      "svgPath": targetSVG,
      "title": "Paris",
      "latitude": 48.8567,
      "longitude": 2.3510,
      "scale": 0.5
    }, {
      "svgPath": targetSVG,
      "title": "New York",
      "latitude": 40.43,
      "longitude": -74,
      "scale": 0.5
    } ];

    // Add lines
    var lineSeries = chart.series.push(new am4maps.MapLineSeries());
    lineSeries.dataFields.multiGeoLine = "multiGeoLine";

    var lineTemplate = lineSeries.mapLines.template;
    lineTemplate.nonScalingStroke = true;
    lineTemplate.arrow.nonScaling = true;
    lineTemplate.stroke = chart.colors.getIndex(1).brighten(-0.5);

    lineSeries.data = [{
      "multiGeoLine": [
        [
          { "latitude": 51.5002, "longitude": -0.1262 },
          { "latitude": 50.4422, "longitude": 30.5367 }
        ]
      ]
    }, {
      "multiGeoLine": [
        [
          { "latitude": 51.5002, "longitude": -0.1262 },
          { "latitude": 40.4300, "longitude": -74.0000 }
        ]
      ]
    }, {
      "multiGeoLine": [
        [
          { "latitude": 51.5002, "longitude": -0.1262 },
          { "latitude": 64.1353, "longitude": -21.8952 }
        ]
      ]
    }, {
      "multiGeoLine": [
        [
          { "latitude": 51.5002, "longitude": -0.1262 },
          { "latitude": 37.9792, "longitude": 23.7166 }
        ]
      ]
    }, {
      "multiGeoLine": [
        [
          { "latitude": 51.5002, "longitude": -0.1262 },
          { "latitude": 38.7072, "longitude": -9.1355 }
        ]
      ]
    }, {
      "multiGeoLine": [
        [
          { "latitude": 51.5002, "longitude": -0.1262 },
          { "latitude": 55.7558, "longitude": 37.6176 }
        ]
      ]
    }, {
      "multiGeoLine": [
        [
          { "latitude": 51.5002, "longitude": -0.1262 },
          { "latitude": 44.8048, "longitude": 20.4781 }
        ]
      ]
    }, {
      "multiGeoLine": [
        [
          { "latitude": 51.5002, "longitude": -0.1262 },
          { "latitude": 48.2116, "longitude": 17.1547 }
        ]
      ]
    }, {
      "multiGeoLine": [
        [
          { "latitude": 51.5002, "longitude": -0.1262 },
          { "latitude": 46.0514, "longitude": 14.5060 }
        ]
      ]
    }, {
      "multiGeoLine": [
        [
          { "latitude": 51.5002, "longitude": -0.1262 },
          { "latitude": 40.4167, "longitude": -3.7033 }
        ]
      ]
    }, {
      "multiGeoLine": [
        [
          { "latitude": 51.5002, "longitude": -0.1262 },
          { "latitude": 59.3328, "longitude": 18.0645 }
        ]
      ]
    }, {
      "multiGeoLine": [
        [
          { "latitude": 51.5002, "longitude": -0.1262 },
          { "latitude": 46.9480, "longitude": 7.4481 }
        ]
      ]
    }];
}


var ammapcapitals=$("#am-map-capitals");
  if(ammapcapitals.length){
}


} )( jQuery ); // End of use strict