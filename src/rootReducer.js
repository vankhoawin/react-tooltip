import { combineReducers } from 'redux';
import { reducer as tooltipReducer } from './pages/TooltipDemo';


export default combineReducers({
  tooltip: tooltipReducer,
});
