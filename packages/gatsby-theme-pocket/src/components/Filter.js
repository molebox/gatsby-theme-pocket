/** @jsx jsx */
import { jsx } from "theme-ui";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";

const controlStyles = {
  borderRadius: "20px",
  padding: "15px",
  background: "#E5E5E5",
  color: "#005056",
  marginTop: "25px"
};

const controlComponent = props => (
  <div
    sx={{
      fontFamily: "body"
    }}
    style={controlStyles}
  >
    <components.Control {...props} />
  </div>
);

const animatedComponents = makeAnimated(controlComponent);

const Filter = props => {
  const { tags, getSelectedTags } = props;
  const articleTags = tags.map(tag => ({ label: tag, value: tag, id: tag }));
  const handleSelection = selections => {
    if (selections) {
      return getSelectedTags(selections);
    }
    return getSelectedTags([]);
  };

  return (
    <Select
      sx={{
        width: "800px",
        position: "sticky",
        top: "0",
        color: "black",
        fontFamily: "body"
      }}
      isMulti
      isClearable
      name="filter"
      label="Filter by tags"
      options={articleTags}
      components={animatedComponents}
      onChange={handleSelection}
    />
  );
};

export default Filter;
