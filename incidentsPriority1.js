//print all incident numbers with priority of 1

var incidentGR = new GlideRecord('incident');

incidentGR.addQuery('priority', 1);
incidentGR.query();

//lop to print numbers
while (incidentGR.next()){
  gs.print('Priority 1 incident: ' + incidentGR.number);
}
