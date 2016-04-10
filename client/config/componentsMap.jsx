//import Nav from '../dep-components/nav/index.jsx'
//import Group from '../dep-components/group/index.jsx'
import Group from '../components/group-wraper/group-wraper.jsx'
//import Test from '../dep-components/test/index.jsx'
import Onepicinfo from '../dep-components/one-pic-info/index.jsx'
import Focus from '../dep-components/focus/index.jsx'
import Carousel from '../dep-components/carousel/index.jsx'
import Singlecard from '../dep-components/single-card/index.jsx'
//import Blesscard from '../dep-components/bless-card/index.jsx'
import Rankdetailtrend from '../dep-components/rank-detail-trend/index.jsx'
import Rankdetailscore from '../dep-components/rank-detail-score/index.jsx'
import Horrankcard from '../dep-components/hor-rank-card/index.jsx'

const ComponentsMap = {
    '11': Group,
    '1': Carousel,
    '2': Singlecard,
    '3': Onepicinfo,
    '5': Focus,
    '6': Horrankcard,
    '7': Rankdetailtrend,
    '8': Rankdetailscore,
};

//const ComponentsMap = {
//    'nav': Nav,
//    '11': Group,
//    'test': Test,
//    '5': Focus,
//    '3': Onepicinfo,
//    '1': Carousel,
//    '2': Singlecard,
//    '9': Blesscard,
//    '7': Rankdetailtrend, //rank-detail-trend
//    '8': Rankdetailscore,//rank-detail-score
//    '6': Horrankcard,
//}
export default ComponentsMap
