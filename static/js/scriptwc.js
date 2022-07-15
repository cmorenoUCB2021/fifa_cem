var year = 1930
var yearY1 = 1930
var metric = 'Points'
var metric1 = 'Points'
var metric2 = 'Points'

var country = "Germany"

var wclist = {1930: "Uruguay", 1934: "Italy", 1938: "France", 1950:"Brazil", 1954:"Switzerland",
              1958: "Sweden", 1962: "Chile", 1966: "England", 1970: "Mexico", 1974: "Germany",
              1978: "Argentina", 1982: "Spain", 1986: "Mexico", 1990: "Italy", 1994: "USA",
              1998: "France", 2002: "South Korea and Japan", 2006: "Germany", 2010: "South Africa",
              2014: "Brazil", 2018: "Russia"  
            }

var wcwinners = {1930: "Uruguay", 1934: "Italy", 1938: "Italy", 1950:"Uruguay", 1954:"Germany",
                 1958: "Brazil", 1962: "Brazil", 1966: "England", 1970: "Brazil", 1974: "Germany",
                 1978: "Argentina", 1982: "Italy", 1986: "Argentina", 1990: "Germany", 1994: "Brazil",
                 1998: "France", 2002: "Brazil", 2006: "Italy", 2010: "Spain",
                 2014: "Germany", 2018: "France"  
          }

console.log(wclist[1930])

var countrywc = wclist[year]
var countywon = wcwinners[year]

var countrywc2 = wclist[yearY1]
var countywon2 = wcwinners[yearY1]


// var countrylist =  [...new Set(fifar.map(d => d.country_full))].sort()

var countrylist =  ['Germany', 'Italy', 'France', 'Spain', 'England', 'Brazil', 'Argentina', 'Uruguay', 'Belgium', 'Netherlands',
                    'Colombia', 'Chile', 'Paraguay', 'Mexico', "USA", "Cameroon", "Ghana", "Japan", "South Korea", "Australia", "India"]
wcusaname = 'United States'
fifakorea = 'Korea Republic'

console.log(countrylist)

console.log("Initial Year: ", year)

console.log("In scriptwc")
// console.log(wcdata)

// Reference: https://vega.github.io/vega-lite/usage/embed.html
// Reference aggregations: https://vega.github.io/vega-lite/docs/aggregate.html


function initdropmenu(){

    console.log("INITIALIZING DROPDOWN MENU")

    var tdlist = [1930, 1934, 1938, 1950, 1954, 1958, 1962, 1966, 1970, 1974, 1978, 1982, 1986, 1990, 
                  1994, 1998, 2002, 2006, 2010, 2014, 2018];
  
    var tdatalist = d3.select("#select1");

    tdatalist.html("");
    tdlist.forEach(function(c){
        row1 = tdatalist.append('option').text(c);})
    // tdatalist.value = year
    selectElement1 = document.querySelector('#select1');
    selectElement1.options[selectElement1.selectedIndex].value = year
    

    var selectY1 = d3.select("#selectY1");

    selectY1.html("");
    tdlist.forEach(function(c){
        row1 = selectY1.append('option').text(c);})
    // tdatalist.value = year
    selectElement1 = document.querySelector('#selectY1');
    selectElement1.options[selectElement1.selectedIndex].value = yearY1

    var metriclist = ["Points", "Position", "Goals For", "Goals Against", "Win", "Draw", "Loss", "Games Played"];

    var select2 = d3.select("#select2");

    select2.html("");
    metriclist.forEach(function(c){
    row1 = select2.append('option').text(c);})
    select2.value = metric

    var select3 = d3.select("#select3");

    select3.html("");
    metriclist.forEach(function(c){
    row1 = select3.append('option').text(c);})
    select3.value = metric1

    var select5 = d3.select("#select5");

    select5.html("");
    metriclist.forEach(function(c){
    row1 = select5.append('option').text(c);})
    select5.value = metric1

    var select4 = d3.select("#select4");

    select4.html("");
    countrylist.forEach(function(c){
    row1 = select4.append('option').text(c);})
    select4.value = country

  };

// PRESENT CONFEDERATION PERFORMANCE FOR A GIVEN YEAR AND METRIC
  function confgraph(chartid, year, metric, datawc){

    // chartid = '#chart'; datawc= wcdata
    var spec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
        title: "Average "+metric+" per Confederation - "+year,
        data: {values: datawc},
        transform: [{filter: "datum.Year == "+year}],
        // width: 400,
        mark: 'bar',
        encoding: {
          x: {field: 'confederation',  type: 'ordinal',sort: "-y" },
          y: {field: metric, aggregate: 'mean', type: 'quantitative', sort: "ascending"},
          tooltip: [{field: metric, aggregate: 'mean', type: 'quantitative'},
                    {field: 'confederation', type: 'ordinal'}],
          color:  {field: 'confederation', type: 'nominal'}
        }
      };

    vegaEmbed(chartid, spec)
    
  };


// PRESENT CONFEDERATION PERFORMANCE ON FOUR METRICS FOR A GIVEN YEAR
  function confgraph_concat(chartid, year, datawc){

    var widthg = 150
    // chartid = '#chart'; datawc= wcdata
    var spec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
        
        data: {values: datawc},
        transform: [{filter: "datum.Year == "+year}],
        hconcat: [{
                        title: "Average Points - "+year,
                        width: widthg,
                        mark: 'bar',
                        encoding: {
                        x: {field: 'confederation',  type: 'ordinal',sort: "-y" },
                        y: {field: "Points", aggregate: 'mean', type: 'quantitative', sort: "ascending"},
                        tooltip: [{field: "Points", aggregate: 'mean', type: 'quantitative'},
                                    {field: 'confederation', type: 'ordinal'}],
                        color:  {field: 'confederation', type: 'nominal'}
                        }},
                   {                    
                        title: "Average GOALS FOR - "+year,
                        width: widthg,
                        mark: 'bar',
                        encoding: {
                        x: {field: 'confederation',  type: 'ordinal',sort: "-y" },
                        y: {field: "Goals For", aggregate: 'mean', type: 'quantitative', sort: "ascending"},
                        tooltip: [{field: "Goals For", aggregate: 'mean', type: 'quantitative'},
                                    {field: 'confederation', type: 'ordinal'}],
                        color:  {field: 'confederation', type: 'nominal'}
                        }},

                    {
                        title: "Average GOALS AGAINST - "+year,
                        width: widthg,
                        mark: 'bar',
                        encoding: {
                        x: {field: 'confederation',  type: 'ordinal',sort: "-y" },
                        y: {field: "Goals Against", aggregate: 'mean', type: 'quantitative', sort: "ascending"},
                        tooltip: [{field: "Goals Against", aggregate: 'mean', type: 'quantitative'},
                                    {field: 'confederation', type: 'ordinal'}],
                        color:  {field: 'confederation', type: 'nominal'}
                        }},
                    {
                        title: "Average WINS - "+year,
                        width: widthg,
                        mark: 'bar',
                        encoding: {
                        x: {field: 'confederation',  type: 'ordinal',sort: "-y" },
                        y: {field: "Win", aggregate: 'mean', type: 'quantitative', sort: "ascending"},
                        tooltip: [{field: "Win", aggregate: 'mean', type: 'quantitative'},
                                    {field: 'confederation', type: 'ordinal'}],
                        color:  {field: 'confederation', type: 'nominal'}
                        }},

                ]
      };

    vegaEmbed(chartid, spec)
    
  };

//   PRESENT GRAPH WITH THE COUNTRIES THAT HAVE WON THE WOLRD CUP
  function countrywinning(chartid){

    // chartid = '#chart'; datawc= wcdata
    var spec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
        title: "Number fo World Cups Won by Country ",
        data: {values: [{country: 'Brazil', won: 5, confederation: "CONMEBOL"},
                        {country: 'Germany', won: 4, confederation: "UEFA"},
                        {country: 'Italy', won: 4, confederation: "UEFA"},
                        {country: 'France', won: 2, confederation: "UEFA"},
                        {country: 'Argentina', won: 2, confederation: "CONMEBOL"},
                        {country: 'Uruguay', won: 2, confederation: "CONMEBOL"},
                        {country: 'Spain', won: 1, confederation: "UEFA"},
                        {country: 'England', won: 2, confederation: "UEFA"}
                        ]},
        // width: 400,
        mark: 'bar',
        encoding: {
          x: {field: 'country',  type: 'ordinal',sort: "-y" },
          y: {field: 'won', type: 'quantitative', sort: "ascending"},
          tooltip: [{field: 'won', type: 'quantitative'},
                    {field: 'country', type: 'ordinal'}],
          color:  {field: 'confederation', type: 'nominal'}
        }
      };

    vegaEmbed(chartid, spec)
    
  };
  
// PRESENT OVERALL PERFORMANCE FOR CONFEDERATIONS FOR A GIVEN METRIC
  function confgraphoverall(chartid, metric, datawc){

    // chartid = '#chart'; datawc= wcdata
    var spec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
        title: "Average "+metric+" per Confederation from 1930 to 2018",
        data: {values: datawc},
        // width: 400,
        mark: 'bar',
        encoding: {
          x: {field: 'confederation',  type: 'ordinal',sort: "-y" },
          y: {field: metric, aggregate: 'mean', type: 'quantitative', sort: "ascending"},
          tooltip: [{field: metric, aggregate: 'mean', type: 'quantitative'},
                    {field: 'confederation', type: 'ordinal'}],
          color:  {field: 'confederation', type: 'nominal'}
        }
      };

    vegaEmbed(chartid, spec)
    
  };

// GRAPH FOR PROGRESSION PERFORMANCE OF CONFEDERATIONS
  function wcconfgraph(chartid, year, metric, datawc){

    // chartid = '#chart'; datawc= wcdata
    console.log("In WCCONFGRAPH")
    var spec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
        title: "Average "+metric+" by Confederation Across All Worldcups",
        data: {values: datawc},

        width: 700,
        height: 250,
        mark: 'bar',
        encoding: {
          x: {field: 'Year',  type: 'ordinal'},
          y: {field: metric, aggregate: 'mean', type: 'quantitative'},
          tooltip: [{field: metric, aggregate: 'mean', type: 'quantitative'},
                    {field: 'confederation', type: 'ordinal'}],
          color:  {field: 'confederation', type: 'nominal'}
        }
      };

    vegaEmbed(chartid, spec)
    
  };

  function teamgraph(chartid, year, metric, datawc){

    // chartid = '#chart'; datawc= wcdata
    var spec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
        title: "Average "+metric+" by Team - "+year,
        data: {values: datawc},
        transform: [{filter: "datum.Year == "+year}],
        width: 400,
        mark: 'bar',
        encoding: {
          x: {field: 'Team',  type: 'ordinal', sort: "-y" },
          y: {field: metric, type: 'quantitative'},
          tooltip: [{field: metric, type: 'quantitative'},
                    {field: 'Team', type: 'ordinal'}],
          color:  {field: 'confederation', type: 'nominal'}
        }
      };

      vegaEmbed(chartid, spec);
    
  };


  function fifarank(chartid, country, datafifa, wcdata){

    // chartid = '#chart'; datawc= wcdata

    console.log("IN FIFARANK *****************")

    fifacountries = d3.group(datafifa, d => d.country_full)


    if (country == 'South Korea') {
        fcountry = fifacountries.get(fifakorea)
      } else {
        fcountry = fifacountries.get(country)
      }

      wcyear = d3.group(wcdata, d => d.Team)

      if (country == 'USA') {
        wccountry = wcyear.get(wcusaname)
      } else {
        wccountry = wcyear.get(country)
      }
      
      console.log(wcyear)

      var spec3 = {

        $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
        title: "FIFA Ranking vs. World Cup Position for "+country,
        layer: [{
            data: {values: fcountry},
            width: 700,
            height: 250,
            mark: 'point',
            encoding: {
            x: {field: 'rank_date', type: 'temporal'},
            y: {field: 'rank', type: 'quantitative'},
            tooltip: [{field: 'rank', type: 'quantitative'}]
            }
        },
        {
            data: {values: wccountry},
            transform: [{filter: "datum.Year > 1993"}],
            width: 700,
            height: 250,
            mark: {type: 'point', color: 'red'},
            // color: 'red',
            encoding: {
            x: {field: 'DateD', type: 'temporal'},
            y: {field: 'Position', type: 'quantitative'},
            tooltip: [{field: 'Position', type: 'quantitative'},
                      {field: 'Year', type: 'quantitative'}
                      ]
            }
            
        }
    ]
      }

      vegaEmbed(chartid, spec3);
    
  };

function updatetext() {

    countrywc = wclist[year]
    countywon = wcwinners[year]

    countrywc2 = wclist[yearY1]
    countywon2 = wcwinners[yearY1]

    var text1 = "World cup of "+year+"  took place in "+countrywc+", and it was won by "+countywon+"!";
    var element = document.getElementById("id01");
    element.innerHTML = text1;

    text1 = "World cup of "+yearY1+"  took place in "+countrywc2+", and it was won by "+countywon2+"!";
    element = document.getElementById("id02");
    element.innerHTML = text1;

}

initdropmenu()
updatetext()
confgraphoverall('#chart0', metric1, wcdata)
countrywinning('#chart01')
confgraph('#chart1', year, metric, wcdata)     // chartid = '#chart'; datawc= wcdata
teamgraph('#chart2', year, metric, wcdata)
wcconfgraph('#chart3', year, metric2, wcdata)
confgraph_concat('#chart1f', yearY1, wcdata)
fifarank('#chart4', country, fifar, wcdata)


// Select the button for DATA3
var dropbutton3= d3.select("#select3");

// Wait of Click on button action
dropbutton3.on("click", function() {

    selectElement = document.querySelector('#select3');
    metric1 = selectElement.options[selectElement.selectedIndex].value;
    console.log(metric1);

    // confgraph('#chart1', year, wcdata)     // chartid = '#chart'; datawc= wcdata
    // teamgraph('#chart2', year, wcdata)
    // wcconfgraph('#chart3', year, datawc)
});


// Select the button for DATA3
var dropbutton1= d3.select("#select1");

// Wait of Click on button action
dropbutton1.on("click", function() {

    selectElement = document.querySelector('#select1');
    year = selectElement.options[selectElement.selectedIndex].value;
    console.log(year);

    // confgraph('#chart1', year, wcdata)     // chartid = '#chart'; datawc= wcdata
    // teamgraph('#chart2', year, wcdata)
    // wcconfgraph('#chart3', year, datawc)
});



var dropbutton2= d3.select("#select2");

// Wait of Click on button action
dropbutton2.on("click", function() {

    selectElement = document.querySelector('#select2');
    metric = selectElement.options[selectElement.selectedIndex].value;
    console.log(metric);

    // confgraph('#chart1', year, wcdata)     // chartid = '#chart'; datawc= wcdata
    // teamgraph('#chart2', year, wcdata)
    // wcconfgraph('#chart3', year, datawc)
});

var dropbutton5= d3.select("#select5");

// Wait of Click on button action
dropbutton5.on("click", function() {

    selectElement = document.querySelector('#select5');
    metric5 = selectElement.options[selectElement.selectedIndex].value;
    console.log(metric);

    // confgraph('#chart1', year, wcdata)     // chartid = '#chart'; datawc= wcdata
    // teamgraph('#chart2', year, wcdata)
    // wcconfgraph('#chart3', year, datawc)
});

var dropbutton3= d3.select("#select3");

// Wait of Click on button action
dropbutton3.on("click", function() {

    selectElement = document.querySelector('#select2');
    country = selectElement.options[selectElement.selectedIndex].value;
    console.log(metric);

    // confgraph('#chart1', year, wcdata)     // chartid = '#chart'; datawc= wcdata
    // teamgraph('#chart2', year, wcdata)
    // wcconfgraph('#chart3', year, datawc)
});


var dropbuttonY1= d3.select("#selectY1");

// Wait of Click on button action
dropbuttonY1.on("click", function() {

    selectElement = document.querySelector('#selectY1');
    yearY1 = selectElement.options[selectElement.selectedIndex].value;
    console.log(yearY1);

    // confgraph('#chart1', year, wcdata)     // chartid = '#chart'; datawc= wcdata
    // teamgraph('#chart2', year, wcdata)
    // wcconfgraph('#chart3', year, datawc)
});

// Select the button
var button1 = d3.select("#Buton1");    

button1.on("click", function() {

    console.log("IN BUTTON 1")
    
    selectElement = document.querySelector('#select1');
    year = selectElement.options[selectElement.selectedIndex].value;
    console.log(year);

    selectElement2 = document.querySelector('#select2');
    metric = selectElement2.options[selectElement2.selectedIndex].value;
    console.log(metric);

    countrywc = wclist[year]
    countywon = wcwinners[year]

    var text1 = "World cup of "+year+"  took place in "+countrywc+", and it was won by "+countywon+"!";
    const element = document.getElementById("id01");
    element.innerHTML = text1;

    confgraph('#chart1', year, metric, wcdata)     // chartid = '#chart'; datawc= wcdata
    teamgraph('#chart2', year, metric, wcdata)

});


// Select the button
var button2 = d3.select("#Buton2");    

button2.on("click", function() {

    console.log("IN BUTTON 2")

    selectElement2 = document.querySelector('#select3');
    metric1 = selectElement2.options[selectElement2.selectedIndex].value;
    console.log(metric1);

    confgraphoverall('#chart0', metric1, wcdata)

});

// Select the button
var button4 = d3.select("#Buton4");    

button4.on("click", function() {

    console.log("IN BUTTON 4")

    selectElement2 = document.querySelector('#select4');
    country = selectElement2.options[selectElement2.selectedIndex].value;
    console.log(country);

    fifarank('#chart4', country, fifar, wcdata)

});

var button5 = d3.select("#Buton5");    

button5.on("click", function() {

    console.log("IN BUTTON 5")

    selectElement2 = document.querySelector('#select5');
    metric2 = selectElement2.options[selectElement2.selectedIndex].value;
    console.log(country);

    wcconfgraph('#chart3', year, metric2, wcdata)

});

var buttonY1 = d3.select("#ButonY1");    

buttonY1.on("click", function() {

    console.log("IN BUTTON Y1")

    selectElement2 = document.querySelector('#selectY1');
    yearY1 = selectElement2.options[selectElement2.selectedIndex].value;
    console.log(yearY1);

    updatetext()
    confgraph_concat('#chart1f', yearY1, wcdata)

});


