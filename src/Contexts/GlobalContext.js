import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import data from "../Components/Projects/data";

const initialState = {
  projectType: " ",
  setSearchSkillInput: [],
  searchData: [],
};

// reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUTS":
      return {
        ...state,
        setSearchSkillInput: action.payload,
      };

    case "SET_PROJECTSINPUTS":
      return {
        ...state,
        projectType: action.payload,
      };

    default:
      return state;
  }
};

// create the context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = (props) => {
  //-------------------------------------------
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    // console.log("contextSearchSkillInput " + state.setSearchSkillInput);

    // Filter data based on the search skill input
    let filteredData = data.filter((project) =>
      project.skills.includes(state.setSearchSkillInput || state.projectType)
    );

    console.log("contextsearchData ", filteredData);

    // Update searchData state
    setSearchData(filteredData);
  }, [state.setSearchSkillInput]);

  useEffect(() => {
    console.log("projectType ", state.projectType);

    // // Update searchData state
    // setSearchData(filteredData);
  }, [state.projectType]);

  const setSearchInputs = (inputs) => {
    dispatch({
      type: "SET_INPUTS",
      payload: inputs,
    });
  };

  const setProjectsInputs = (type) => {
    dispatch({
      type: "SET_PROJECTSINPUTS",
      payload: type,
    });
  };

  const value = {
    ...state,
    searchData,
    setSearchInputs,
    setProjectsInputs,
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}
