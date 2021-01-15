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
$("#TotalElev").hide();
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
        $("#TotalElev").hide();
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
        $("#TotalElev").show();
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
        $("#TotalElev").show();
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
        $("#TotalElev").show();
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
        $("#TotalElev").show();
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



    