import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit  from "simple-git";
const path = "./data.json";
const date = moment().subtract(5, "days").format();

const data = { 
    data: date,
 };

jsonfile.writeFileSync(path, data, () => {
simpleGit().add([path]).commit(date, {'--date': date}).push();
});
