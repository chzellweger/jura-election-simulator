import { voteTrackerInit } from './voteTrackerModule.js';
import { renderView } from './viewController.js';

var appInit = function() {
	voteTrackerInit();
	renderView();
}; 

export { appInit };