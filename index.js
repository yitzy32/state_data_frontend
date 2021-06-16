/* global Datamap axios */
axios.get("http://localhost:3000/api/states").then(response => {
  var allTheStates = {};
  for (const state of response.data) {
    let currentState = {};
    currentState["state"] = state.state;
    currentState["median_household_income"] = state.median_household_income;
    currentState["share_unemployed_seasonal"] = state.share_unemployed_seasonal;
    currentState["share_population_in_metro_areas"] = state.share_population_in_metro_areas;
    currentState["share_population_with_high_school_degree"] = state.share_population_with_high_school_degree;
    currentState["abbrev"] = state.abbrev;
    currentState["state_code"] = state.state_code;
    allTheStates[state.state_code] = currentState;
  }
  console.log(allTheStates);

  var election = new Datamap({
    scope: 'usa',
    element: document.getElementById('map_election'),
    geographyConfig: {
      highlightBorderColor: '#bada55',
      popupTemplate: function (geography, allTheStates) {
        return `<div class="hoverinfo"> ${geography.properties.name}, <br> Median Household income: ${allTheStates.median_household_income} <br> Share Unemployed Seasonal: ${allTheStates.share_unemployed_seasonal} <br> Share Population In Metro Areas ${allTheStates.share_population_in_metro_areas} <br> Share Population With High School Degree ${allTheStates.share_population_with_high_school_degree}`;
      },
      highlightBorderWidth: 3
    },

    fills: {
      defaultFill: '#EDDC4E'
    },
    data: allTheStates
  });
  election.labels();

});