// update all urgency 2 incident to 3

var incidentGR = new GlideRecord('incident');

incidentGR.addQuery('urgency', 2);
incidentGR.query();

while(incidentGR.next()){
  gs.print(incidentGR.number);
  incidentGR.urgency = 3;
  incidentGR.update();
}
