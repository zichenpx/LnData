import { useEffect } from "react";
import { useState } from "react";

import "./ShowChart.css";
import Button from "react-bootstrap/Button";

function ShowChart() {
  return (
    <div className="show_chart_section">
      <Button name="show_chart" className="show_chart_btn" variant="info">
        Show Chart
      </Button>
    </div>
  );
}

export default ShowChart;
