import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, geoAPIUrl } from "../../api";

const Search = ({ onSearchChange }) => {
  const loadOptions = async (inputValue) => {
    try {
      if (!inputValue.trim()) {
        return {
          options: [],
          hasMore: false,
        };
      }

      const response = await fetch(
        `${geoAPIUrl}?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      );

      const data = await response.json();

      const options = data.data?.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name} ${city.countryCode}`,
      }));

      return {
        options,
        hasMore: options?.length === data?.data?.length,
      };
    } catch (error) {
      console.error(error);
      return {
        options: [],
        hasMore: false,
      };
    }
  };

  return (
    <AsyncPaginate
      placeholder="Search for any city"
      debounceTimeout={600}
      isSearchable
      loadOptions={loadOptions}
      onChange={(selectedOption) => onSearchChange(selectedOption)}
      additional={{
        page: 1,
      }}
    />
  );
};

export default Search;
