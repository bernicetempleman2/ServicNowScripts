var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('short_description','incident # 3');
incidentGR.query();
while(incidentGR.next()){
  gs.print(incidentGR.number);
  incidentGR.deleteRecord();
}
