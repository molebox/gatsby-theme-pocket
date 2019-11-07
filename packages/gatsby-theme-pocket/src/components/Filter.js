/** @jsx jsx */
import { jsx } from "../context";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";

const controlComponent = props => (
  <div>
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
        width: "90%",
        position: "sticky",
        top: "0",
        color: "black",
        fontFamily: "body",
        borderColor: "blue"
      }}
      isMulti
      isClearable
      name="filter"
      placeholder="Filter by tags..."
      options={articleTags}
      components={animatedComponents}
      onChange={handleSelection}
    />
  );
};

export default Filter;
