//

var problemGR = new GlideRecord('problem');
problemGR.query();
if (problemGR.canCreate() && problemGR.canRead() && problemGR.canWrite()
&& problemGR.canDelete){
  gs.print(' I have access to create, read, update, and delete' );
}
