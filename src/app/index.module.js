import 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-resource';
import 'angular-sanitize';
import 'angular-translate';
import 'angular-translate-loader-partial';
import 'angular-ui-router';
import 'material-design-lite';
import 'ng-http-progress';

import '../../node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css';
import '../../node_modules/angular-material/angular-material.min.css';
import '../../node_modules/material-design-lite/dist/material.brown-green.min.css';
import '../../node_modules/ng-http-progress/dist/ng-http-progress.min.css';

import IndexApi from './index.api';
import IndexConfig from './index.config';
import IndexController from './index.controller';
import IndexRoute from './index.route';
import IndexRun from './index.run';

import AppToolbar from './toolbar/toolbar.module';
import AppFooter from './footer/footer.module';

import home from './main/home/home.module';
import skills from './main/skills/skills.module';
import tools from './main/tools/tools.module';
import works from './main/works/works.module';
import contact from './main/contact/contact.module';

angular
	.module('app',[
		// third party modules
		'ngMaterial',
		'ui.router',
		'thatisuday.ng-http-progress',
		'pascalprecht.translate',
		
		// app modules
		AppToolbar,
		AppFooter,

		home,
		skills,
		tools,
		works,
		contact
	])
	.controller('IndexController',IndexController)
	.factory('api', IndexApi)
	.config(IndexConfig)
	.config(IndexRoute)
	.run(IndexRun);