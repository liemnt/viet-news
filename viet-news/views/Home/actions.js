import {GET_ALL_TIMELINE, GET_ALL_TMELINE_SUCCESS} from "./const";

export const getAllTimeline = () =>{
    return {
        type: GET_ALL_TIMELINE
    }
}

export const getAllTimelineSuccess = (timelines) =>{
    return {
        type: GET_ALL_TMELINE_SUCCESS,
        timelines
    }
};