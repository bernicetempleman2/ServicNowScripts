// delete records: shorts description like incident #

//first log to screen

var incidentGR = new GlideRecord('incident');
incidentGR.addEncodedQuery('short_descriptionLIKEincident #');
incidentGR.query();
/*
while(incidentGR.next()){
  gs.print(incidentGR.number);
}
*/

incidentGR.deleteMultiple();

