//print all incident numbers

var incidentGR = new GlideRecord('incident');
incidentGR.query();
while (incidentGR.next()){
  gs.print(incidentGR.number);
}
