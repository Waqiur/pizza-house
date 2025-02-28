import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { useFetcher } from "react-router-dom";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

UpdateOrder.propTypes = {
  order: PropTypes.object.isRequired,
};

export default UpdateOrder;
