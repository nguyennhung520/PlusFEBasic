function myFunction() {
    var text;
    var month = document.getElementById("myInput").value;
  
    switch(month) {
      case "1":
        
      case "3":
    
      case "5":
    
      case "7":
    
      case "8":
    
      case "10":

      case "12":
    
        text = "Month " + month + " have 31 days"; 
        break;
      
      case "4":

      case "6":

      case "9":

      case "11":
        text = "Month " + month + " have 30 days";
        break;
      default:
      text = "Month " + month + " have 28 or 29 days";
    }
    document.getElementById("demo").innerHTML = text;
  }