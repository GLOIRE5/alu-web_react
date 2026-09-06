import $ from 'jquery';
import _ from 'lodash';
$('#start').on('click', _.debounce(updateCounter, 500));