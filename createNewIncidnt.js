//create a new incident

var newIncidentGR = new GlideRecord('incident');

newIncidentGR.newRecord(); // genertes sys_id and defaults

//set short_description

newIncidentGR.short_description = 'This incident was created with newRecord';

//var for  sys_id
var newIncidentGRSysID =

//insert into db
newIncidentGR.insert();

gs.print(newIncidentGRSysID);

