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
import 'angular1-star-rating';
import 'angular-emoji-filter-hd';

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
	.config(IndexConfig)
	.config(IndexRoute)
	.run(IndexRun);