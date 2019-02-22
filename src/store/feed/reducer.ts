import { Reducer } from 'redux';
import { IFeedState, FeedActionTypes } from './types';


// Type-safe initialState
const initialState: IFeedState = {
   items: undefined
};

 // ***** NOTE: Working *****
const reducer: Reducer<IFeedState> = (state = initialState, action) => {
    switch (action.type) {
        case FeedActionTypes.FETCH_REQUEST: {
            return { ...state  };
        }
        case FeedActionTypes.FETCH_SUCCESS: {
            // Note: when using the ChrisAPI the items will be action.payload.collection.items
            // return { ...state, items: action.payload.collection.items }; //Note: For API call... stub
            return { ...state, items: action.payload.data.results };
        }
        case FeedActionTypes.FETCH_ERROR: {
            return { ...state  };
        }
        case FeedActionTypes.FETCH_COMPLETE: {
            return { ...state  };
        }
        //  ***** Working *****


        default: {
            return state;
        }
    }
};

export { reducer as feedReducer };
