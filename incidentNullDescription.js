// 

var incidentGR = new GlideRecord('incident');

incidentGR.addNullQuery('description');
incidentGR.query();

while(incidentGR.next()){
  gs.print(incidentGR.number);
  
}
