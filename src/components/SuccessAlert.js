import { Alert } from "flowbite-react";
import PropTypes from "prop-types";
import React from "react";

export default function SuccessAlert(props) {
  const { toggleHandler } = props;
  return (
    <Alert
      color="success"
      onDismiss={function onDismiss() {
        return toggleHandler();
      }}
    >
      <span>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </span>
    </Alert>
  );
}

SuccessAlert.propTypes = {
  toggleHandler: PropTypes.func.isRequired,
};
