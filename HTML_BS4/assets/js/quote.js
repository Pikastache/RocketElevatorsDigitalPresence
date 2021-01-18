$("#number_of_appartment").hide();
$("#number_of_floors").hide();
$("#number_of_basement").hide();
$("#number_of_businesses").hide();
$("#number_of_parking").hide();
$("#number_of_Elevator_cages").hide();
$("#number_of_tenant_companies").hide();
$("#nb_occup_per_floors").hide();
$("#number_of_hours_of_activity_in_the_building").hide();
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
        $("#number_of_appartment").hide();
        $("#number_of_floors").hide();
        $("#number_of_basement").hide();
        $("#number_of_businesses").hide();
        $("#number_of_parking").hide();
        $("#number_of_Elevator_cages").hide();
        $("#number_of_tenant_companies").hide();
        $("#nb_occup_per_floors").hide();
        $("#number_of_hours_of_activity_in_the_building").hide(); 
        $("#RecoElev").hide();
        $("#InstaCost").hide();
        $("#PricePerElevator").hide();
        $("#TotalCostforElev").hide();
        $("#PriceTotal").hide();
    };
    
    if(chooses == "residential" ){
        $("#number_of_appartment").show();
        $("#number_of_floors").show();
        $("#number_of_basement").show();
        $("#number_of_businesses").hide();
        $("#number_of_parking").hide();
        $("#number_of_Elevator_cages").hide();
        $("#number_of_tenant_companies").hide();
        $("#nb_occup_per_floors").hide();
        $("#number_of_hours_of_activity_in_the_building").hide();
        $("#RecoElev").show();
        $("#InstaCost").show();
        $("#PricePerElevator").show();
        $("#TotalCostforElev").show();
        $("#PriceTotal").show();
    };

    if(chooses == "commercial" ){
        $("#number_of_appartment").hide();
        $("#number_of_floors").show();
        $("#number_of_basement").show();
        $("#number_of_businesses").show();
        $("#number_of_parking").show();
        $("#number_of_Elevator_cages").show();
        $("#number_of_tenant_companies").hide();
        $("#nb_occup_per_floors").hide();
        $("#number_of_hours_of_activity_in_the_building").hide();
        $("#RecoElev").show();
        $("#InstaCost").show();
        $("#PricePerElevator").show();
        $("#TotalCostforElev").show();
        $("#PriceTotal").show();
    };

    if(chooses == "corporate" ){
        $("#number_of_appartment").hide();
        $("#number_of_floors").show();
        $("#number_of_basement").show();
        $("#number_of_businesses").hide();
        $("#number_of_parking").show();
        $("#number_of_Elevator_cages").hide();
        $("#number_of_tenant_companies").show();
        $("#nb_occup_per_floors").show();
        $("#number_of_hours_of_activity_in_the_building").hide();
        $("#RecoElev").show();
        $("#InstaCost").show();
        $("#PricePerElevator").show();
        $("#TotalCostforElev").show();
        $("#PriceTotal").show();
    };

    if(chooses == "hybrid" ){
        $("#number_of_appartment").hide();
        $("#number_of_floors").show();
        $("#number_of_basement").show();
        $("#number_of_businesses").show();
        $("#number_of_parking").show();
        $("#number_of_Elevator_cages").hide();
        $("#number_of_tenant_companies").hide();
        $("#nb_occup_per_floors").show();
        $("#number_of_hours_of_activity_in_the_building").show();
        $("#RecoElev").show();
        $("#InstaCost").show();
        $("#PricePerElevator").show();
        $("#TotalCostforElev").show();
        $("#PriceTotal").show();
    };

    console.log(chooses);
});

    var NumberOfAppartment = document.getElementById("number_of_appartment_input");
    var NumberOfFloors = document.getElementById("number_of_floors_input");
    var NumberOfBasement = document.getElementById("number_of_basement_input");
    var NumberOfBusinesses = document.getElementById("number_of_businesses_input");
    var NumberOfParking = document.getElementById("number_of_parking_input");
    var NumberOfElevatorCages = document.getElementById("number_of_Elevator_cages_input");
    var NumberOfTenantCompanies = document.getElementById("number_of_tenant_companies_input");
    var NumberOfOccupentsPerFloors = document.getElementById("number_of_occupents_per_floors_input");
    var NumberOfHoursOfActivityInTheBuilding = document.getElementById("number_of_hours_of_activity_in_the_building_input");
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
        var TotalFloors = parseInt(NumberOfFloors.value) + parseInt(NumberOfBasement.value)
        console.log(TotalFloors)
        var AllOccupents = NumberOfOccupentsPerFloors.value * TotalFloors
        console.log(AllOccupents)
        var TotalElevator = Math.ceil(AllOccupents / 1000)
        console.log(TotalElevator)
        var NumColon = TotalElevator / 20
        console.log(NumColon.value)
        var ElevatorPerColon = TotalElevator / NumColon
        console.log(ElevatorPerColon.value)
        var TotalNbOfelevator = ElevatorPerColon * NumColon
        console.log(TotalNbOfelevator)
        RecommendedElevator.value = TotalNbOfelevator
    };


    $("input[type='radio']").on('click', function(){
        var type = $("input[name='services']:checked").val();
        if(type == "7565"){
            PricePerElevator.value = type;
            TotalCostforElev.value = PricePerElevator.value * RecommendedElevator.value
        }

        if(type == "12345"){
            PricePerElevator.value = type;
        }

        if(type == "15400"){
            PricePerElevator.value = type;
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
    
