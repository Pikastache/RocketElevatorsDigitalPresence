$("#number-of-apartments").hide();
$("#number-of-floors").hide();
$("#number-of-basements").hide();
$("#number-of-companies").hide();
$("#number-of-parking-spots").hide();
$("#number-of-elevators").hide();
$("#number-of-corporations").hide();
$("#maximum-occupancy").hide();
$("#business-hours").hide();
$("#RecoElev").hide();
$("#InstaCost").hide();
$("#PricePerElevator").hide();
$("#TotalCostforElev").hide();
$("#PriceTotal").hide();

$("#Building_option").on('change', function (){
    var chooses = $("#Building_option option:selected").val();
    console.log("select");


    if (chooses == "select" ){
        console.log("select");
        $("#number-of-apartments").hide();
        $("#number-of-floors").hide();
        $("#number-of-basements").hide();
        $("#number-of-companies").hide();
        $("#number-of-parking-spots").hide();
        $("#number-of-elevators").hide();
        $("#number-of-corporations").hide();
        $("#maximum-occupancy").hide();
        $("#business-hours").hide(); 
        $("#RecoElev").hide();
        $("#InstaCost").hide();
        $("#PricePerElevator").hide();
        $("#TotalCostforElev").hide();
        $("#PriceTotal").hide();
    };
    
    if(chooses == "residential" ){
        $("#number-of-apartments").show();
        $("#number-of-floors").show();
        $("#number-of-basements").show();
        $("#number-of-companies").hide();
        $("#number-of-parking-spots").hide();
        $("#number-of-elevators").hide();
        $("#number-of-corporations").hide();
        $("#maximum-occupancy").hide();
        $("#business-hours").hide();
        $("#RecoElev").show();
        $("#InstaCost").show();
        $("#PricePerElevator").show();
        $("#TotalCostforElev").show();
        $("#PriceTotal").show();
    };

    if(chooses == "commercial" ){
        $("#number-of-apartments").hide();
        $("#number-of-floors").show();
        $("#number-of-basements").show();
        $("#number-of-companies").show();
        $("#number-of-parking-spots").show();
        $("#number-of-elevators").show();
        $("#number-of-corporations").hide();
        $("#maximum-occupancy").hide();
        $("#business-hours").hide();
        $("#RecoElev").show();
        $("#InstaCost").show();
        $("#PricePerElevator").show();
        $("#TotalCostforElev").show();
        $("#PriceTotal").show();
    };

    if(chooses == "corporate" ){
        $("#number-of-apartments").hide();
        $("#number-of-floors").show();
        $("#number-of-basements").show();
        $("#number-of-companies").hide();
        $("#number-of-parking-spots").show();
        $("#number-of-elevators").hide();
        $("#number-of-corporations").show();
        $("#maximum-occupancy").show();
        $("#business-hours").hide();
        $("#RecoElev").show();
        $("#InstaCost").show();
        $("#PricePerElevator").show();
        $("#TotalCostforElev").show();
        $("#PriceTotal").show();
    };

    if(chooses == "hybrid" ){
        $("#number-of-apartments").hide();
        $("#number-of-floors").show();
        $("#number-of-basements").show();
        $("#number-of-companies").show();
        $("#number-of-parking-spots").show();
        $("#number-of-elevators").hide();
        $("#number-of-corporations").hide();
        $("#maximum-occupancy").show();
        $("#business-hours").show();
        $("#RecoElev").show();
        $("#InstaCost").show();
        $("#PricePerElevator").show();
        $("#TotalCostforElev").show();
        $("#PriceTotal").show();
    };

    console.log(chooses);
  });

    var NumberOfAppartment = document.getElementById("number-of-apartments_input");
    var NumberOfFloors = document.getElementById("number-of-floors_input");
    var NumberOfBasement = document.getElementById("number-of-basements_input");
    var NumberOfBusinesses = document.getElementById("number-of-companies_input");
    var NumberOfParking = document.getElementById("number-of-parking-spots_input");
    var NumberOfElevatorCages = document.getElementById("number-of-elevators_input");
    var NumberOfTenantCompanies = document.getElementById("number-of-corporations_input");
    var NumberOfOccupentsPerFloors = document.getElementById("maximum-occupancy_input");
    var NumberOfHoursOfActivityInTheBuilding = document.getElementById("business-hours_input");
    var RecommendedElevator = document.getElementById("ElevatorRec_input");
    var InstaCost = document.getElementById("InstaCost_input");
    var PricePerElevator = document.getElementById("PricePerElevator_input");
    var TotalCostforElev = document.getElementById("TotalCostforElev_input");
    var PriceTotal = document.getElementById("PriceTotal_input");

    function commercial () {
        RecommendedElevator.value = NumberOfElevatorCages.value
    };

    function residential () {
      var AverageOfApartment = NumberOfAppartment.value / NumberOfFloors.value;
      console.log(AverageOfApartment + " taf")
      var elevCage = Math.ceil(AverageOfApartment / 6);
      console.log(elevCage + " elevCage")
      var numer_colon = Math.ceil(NumberOfFloors.value / 20);
      console.log(numer_colon)
      var ElevatorPerColon =  numer_colon * elevCage;
      console.log(ElevatorPerColon)
      RecommendedElevator.value = ElevatorPerColon
    };

    function Corporate_Hybrid () {
    var total_Floors = NumberOfFloors.value + NumberOfBasement.value;
    console.log(total_Floors + " total_Floors");
    var totalPersonnes =  NumberOfOccupentsPerFloors.value * total_Floors;
    console.log(totalPersonnes + " totalPersonnes");
    var Number_elevator = Math.ceil(totalPersonnes / 1000);
    console.log(Number_elevator + " Number_elevator");
    var number_colone = Math.ceil(total_Floors / 20);
    console.log(number_colone + " number_colone");
    var elevator_per_colone = Math.ceil(Number_elevator / number_colone);
    console.log(elevator_per_colone + " elevator_per_colone");
    var total =  elevator_per_colone * number_colone;
    console.log(total + " total");
    RecommendedElevator.value = total;
    };


    $("input[type='radio']").on('click', function(){
        var type = $("input[name='services']:checked").val();
        if(type == "7565"){
            PricePerElevator.value = type;
            TotalCostforElev.value = parseint(PricePerElevator.value) * parseint(RecommendedElevator.value);
            var instal = TotalCostforElev.value * 0.16;
            console.log(instal + "intstal")
            InstaCost.value = intstal;
            InstaCost.value = intstal;
            PriceTotal.value = (parseint(InstaCost.value) + parseint(TotalCostforElev.value))
        }

        if(type == "12345"){
            PricePerElevator.value = type;
            TotalCostforElev.value = parseint(PricePerElevator.value) * parseint(RecommendedElevator.value);
            var instal = TotalCostforElev.value * 0.16;
            console.log(instal + "intstal")
            InstaCost.value = intstal;
            InstaCost.value = intstal;
            PriceTotal.value = (parseint(InstaCost.value) + parseint(TotalCostforElev.value))
        }

        if(type == "15400"){
            PricePerElevator.value = type;
            TotalCostforElev.value = parseint(PricePerElevator.value) * parseint(RecommendedElevator.value);
            var instal = TotalCostforElev.value * 0.16;
            console.log(instal + "intstal")
            InstaCost.value = intstal;
            InstaCost.value = intstal;
            PriceTotal.value = (parseint(InstaCost.value) + parseint(TotalCostforElev.value))
        }


    });

    $("input").on('keyup click',function () {
        var TypeValue = $("#Building_option option:selected").val();
       
       if(TypeValue=="residential"){
        residential();
        
       }
    
       if(TypeValue=="commercial"){
        commercial();
        
              
       }
       if(TypeValue=="corporate"){
        Corporate_Hybrid();
             
       }
    
       if(TypeValue=="hybrid"){
        Corporate_Hybrid();
       
       }
      
    });
    
//j'aime pas mon coach!!!