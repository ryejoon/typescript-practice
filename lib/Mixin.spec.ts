import ReportLog from "./ReportLog";
import {SmartObject} from "./Mixin";

declare var global;

describe('Report Log', () => {

    it('should calculate percentiles correctly', () => {
        let smartObj = new SmartObject();
        global.setTimeout(() => smartObj.interact(), 1000);

    })

});
