/*jshint node:true*/
module.exports = {
	normalizeEntityName: function() {},

	afterInstall: function() 
	{
		return this.addBowerPackageToProject('jquery-date-range-picker', '~0.0.8');
	}
};