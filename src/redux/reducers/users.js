import { GET_DATA, API_DATA, FILTER} from "../actions/users";

const initState = {
    filter: {
        isFilter: false,
        data: {}
    },
    list: [],
    todo: []
};

export default function(state = initState, action) {
    switch (action.type) {
        case API_DATA:
            return state;
        case GET_DATA:
            return { ...state, list: action.data.list, todo:action.data.todo};
        case FILTER:
            const filter = {
                isFilter:action.isFilter,
                data:action.data
            };
            return { ...state, filter: filter };
        default:
            return state;
    }
}
