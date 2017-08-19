
// ======================================================
// Radar Chart
// ======================================================

// Radar Chart Options
var radarOptions = {  

    //Boolean - If we show the scale above the chart data			
    scaleOverlay: false,
    //Boolean - If we want to override with a hard coded scale
    scaleOverride: false,
    //Boolean - Whether to show lines for each scale point
    scaleShowLine: true,
    //String - Colour of the scale line	
    scaleLineColor: "#999",
    //Number - Pixel width of the scale line	
    scaleLineWidth: 1,
    //Boolean - Whether to show labels on the scale	
    scaleShowLabels: false,
    //Interpolated JS string - can access value
    scaleLabel: "<%=value%>",
    //String - Scale label font declaration for the scale label
    scaleFontFamily: "'Open Sans'",
    //Number - Scale label font size in pixels	
    scaleFontSize: 12,
    //String - Scale label font weight style	
    scaleFontStyle: "normal",
    //String - Scale label font colour	
    scaleFontColor: "#666",
    //Boolean - Show a backdrop to the scale label
    scaleShowLabelBackdrop: true,
    //String - The colour of the label backdrop	
    scaleBackdropColor: "rgba(255,255,255,0.75)",
    //Number - The backdrop padding above & below the label in pixels
    scaleBackdropPaddingY: 2,
    //Number - The backdrop padding to the side of the label in pixels	
    scaleBackdropPaddingX: 2,
    //Boolean - Whether we show the angle lines out of the radar
    angleShowLineOut: true,
    //String - Colour of the angle line
    angleLineColor: "rgba(255,255,255,0.3)",
    //Number - Pixel width of the angle line
    angleLineWidth: 1,			
    //String - Point label font declaration
    pointLabelFontFamily: "'Open Sans'",
    //String - Point label font weight
    pointLabelFontStyle: "normal",
    //Number - Point label font size in pixels	
    pointLabelFontSize: 12,
    //String - Point label font colour	
    pointLabelFontColor: "#00EFEF",
    //Boolean - Whether to show a dot for each point
    pointDot: true,
    //Number - Radius of each point dot in pixels
    pointDotRadius: 3,
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,
    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 1,
    //Boolean - Whether to fill the dataset with a colour
    datasetFill: true,
    //Boolean - Whether to animate the chart
    animation: true,
    //Number - Number of animation steps
    animationSteps: 60,
    //String - Animation easing effect
    animationEasing: "easeOutQuart",
    //Function - Fires when the animation is complete
    onAnimationComplete: null,
    //make it respond damnit!
    responsive: true
}

// Radar Data
var radarData = {
    labels: "{{ site.data.skills.aspects }}".split(","),
    datasets: [{
        fillColor: "rgba(60, 175, 226, .6)",
        strokeColor: "rgba(60, 175, 226, .8)",
        data: [{{ site.data.skills.percentage }}]
    }]
}

//Get the context of the Radar Chart canvas element we want to select
var ctx3 = document.getElementById("radarChart").getContext("2d");

// Create the Radar Chart
var myRadarChart = new Chart(ctx3).Radar(radarData, radarOptions);
