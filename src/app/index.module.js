import '../../node_modules/angular/angular.min.js';
import '../../node_modules/angular-animate/angular-animate.min.js';
import '../../node_modules/angular-aria/angular-aria.min.js';
import '../../node_modules/angular-material/angular-material.min.js';
import '../../node_modules/angular-resource/angular-resource.min.js';
import '../../node_modules/angular-messages/angular-messages.min.js';
import '../../node_modules/angular-sanitize/angular-sanitize.min.js';
import '../../node_modules/angular-translate/dist/angular-translate.min.js';
import '../../node_modules/angular-translate-loader-partial/angular-translate-loader-partial.min.js';
import '../../node_modules/angular-ui-router/release/angular-ui-router.min.js';
import '../../node_modules/material-design-lite/material.min.js';
import '../../node_modules/ng-http-progress/dist/ng-http-progress.min.js';
import '../../node_modules/angular1-star-rating/dist/index.js';
import '../../node_modules/angular-emoji-filter-hd/dist/emoji.min.js';

import '../../node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css';
import '../../node_modules/angular-material/angular-material.min.css';
import '../../node_modules/material-design-lite/dist/material.blue-pink.min.css';
import '../../node_modules/ng-http-progress/dist/ng-http-progress.min.css';
import '../../node_modules/angular-emoji-filter-hd/dist/emoji.min.css';

import IndexApi from './index.api';
import IndexConfig from './index.config';
import IndexController from './index.controller';
import IndexRoute from './index.route';
import IndexRun from './index.run';
import IndexInterceptor from './index.interceptor';

import './index.scss';

import AppToolbar from './toolbar/toolbar.module';

import home from './main/home/home.module';
import ability from './main/ability/ability.module';
import showcase from './main/showcase/showcase.module';
import contact from './main/contact/contact.module';

angular
	.module('app',[
		// third party modules
		'ngMaterial',
		'ngMessages',
		'ngSanitize',
		'ngResource',
		'ui.router',
		'thatisuday.ng-http-progress',
		'pascalprecht.translate',
		'star-rating',
		'dbaq.emoji',

		// app modules
		AppToolbar,

		home,
		ability,
		showcase,
		contact
	])
	.controller('IndexController',IndexController)
	.factory('api', IndexApi)
	.factory('httpRequestInterceptor', IndexInterceptor)
	.config(IndexConfig)
	.config(IndexRoute)
	.run(IndexRun);