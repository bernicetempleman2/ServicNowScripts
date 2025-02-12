//create 5 new incident

var newIncidents = [];
var counter = 1;

var incidentGR = new GlideRecord('incident');

while(counter <= 5){
  incidentGR.newRecord(); // genertes sys_id and defaults

  //set short_description
  incidentGR.short_description = 'incident # ' + counter;
  counter ++;

  // push onto array
  newIncidents.push(incidentGR.insert());
}

//print array to screen
gs.print(newIncidents);


