//print all incident numbers

var incidentGR = new GlideRecord('incident');
incidentGR.query();

//don't print any
gs.print(incidentGR.number);

//print only the first record
incidentGR.next()
gs.print(incidentGR.number);

//lop to print numbers
while (incidentGR.next()){
  gs.print(incidentGR.number);
}
