var buildingType=0;
function SelectResidential(){ 
    document.getElementById("mySelect").style.display="block";
    buildingType=1;
    clear();
}
function SelectCommercial() {
    document.getElementById("mySelect").style.display = "block";
    buildingType=2;
    clear();
}
function SelectCorporate() {
    document.getElementById("mySelect").style.display = "block";
    buildingType=3;
    clear();
}
function SelectHybrid() {
    document.getElementById("mySelect").style.display = "block"; 
    buildingType=4;
    clear();
   }
//Number of elevators calculations
 function numberResidentialEl(){
       var rNumEls = 0;
       var rNumApartments = document.getElementById("numApartment1").value;
       var rNumFloors = document.getElementById("numFloor1").value;
       var rAvgDoors = Math.ceil(Math.ceil(rNumApartments/rNumFloors)/6);
       var rElColumns= Math.ceil(rNumFloors/20);
       rNumEls= rAvgDoors*rElColumns;
       return rNumEls;
 }
         //Number of commercial elevators
        function numberCommercialEl() {
               var cNumCages= document.getElementById("numCage2").value;
            return cNumCages;
        }
            // number of corporate and hybrid elevators
        function numberCorporateEl(){
               var coNumFloors=document.getElementById("numFloor3").value;                
               var coNumBasements=document.getElementById("numBasements3").value;               
               var coNumOccupants= document.getElementById("numOccupant3").value;       
               var totFloors= parseInt(coNumFloors)+ parseInt(coNumBasements)
               var totOccupant1= coNumOccupants*totFloors;
               var coNumEls= Math.ceil(totOccupant1/1000);
               var coElsColumns= Math.ceil((coNumFloors+coNumBasements)/20);
               var coElsPerColumn= coNumEls/coElsColumns;
               var totElsco= coElsPerColumn*coElsColumns;
               return coNumEls;
        }
         function numberHybridEl() {
             var hNumFloors = document.getElementById("numFloor4").value;
             var hNumBasements = document.getElementById("numBasement4").value;
             var hNumOccupants = document.getElementById("numOccupant4").value;
             var totFloors1 = parseInt(hNumFloors) + parseInt(hNumBasements);
             console.log(totFloors1);
             var totOccupant = hNumOccupants * totFloors1;
             var hNumEls = Math.ceil(totOccupant / 1000);
             var hElsColumns = Math.ceil((hNumFloors + hNumBasements) / 20);
             var hElsPerColumn = hNumEls / hElsColumns;
             var totElsh = hElsPerColumn * hElsColumns;
             return hNumEls;
         }
//calculate price
function changeValue(){  
    var elevatorNeeded= 0;
    if(buildingType ==1){
        elevatorNeeded= numberResidentialEl();
        document.getElementById("elevatorResult").value = elevatorNeeded;
    }
    if(buildingType == 2){
        elevatorNeeded=numberCommercialEl();
        document.getElementById("elevatorResult").value = elevatorNeeded;
    }
    if(buildingType==3){
        elevatorNeeded=numberCorporateEl();
        document.getElementById("elevatorResult").value = elevatorNeeded;  
      }
    if(buildingType ==4){
        elevatorNeeded=numberHybridEl();
        document.getElementById("elevatorResult").value = elevatorNeeded;
    }
    var UP =0.00;
    var totalP=0.00;
    var installP=0.00;
    if(document.getElementById("radioStandard").checked){
        UP=7565.00;
        installP=UP*elevatorNeeded*0.1;
        totalP=UP*elevatorNeeded+installP;
        document.getElementById("PriceUnit").value = UP;
        document.getElementById("InstallationCost").value= installP;
        document.getElementById("TotalCost").value=totalP;
    }
      if (document.getElementById("radioPremium").checked) {
        UP =12345.00;
        installP = UP * elevatorNeeded * 0.13;
        totalP = UP * elevatorNeeded + installP;
        document.getElementById("PriceUnit").value = UP;
        document.getElementById("InstallationCost").value = installP;
        document.getElementById("TotalCost").value = totalP;
    }
      if (document.getElementById("radioExcelium").checked) {
        UP = 15400.00;
        installP = UP * elevatorNeeded * 0.16;
        totalP = UP * elevatorNeeded + installP;
        document.getElementById("PriceUnit").value = UP;
        document.getElementById("InstallationCost").value = installP;
        document.getElementById("TotalCost").value = totalP;
    }
}    
var clear= function(){
    document.getElementById("myForm").reset
}