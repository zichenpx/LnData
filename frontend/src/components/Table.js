import { useEffect } from "react";
import { useState } from "react";

import Table from "react-bootstrap/Table";
import "./Table.css";

function ResutlsTable(props) {
  const [results, setResult] = useState([]);

  return (
    <div className="table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>name</th>
            <th>team_acronym</th>
            <th>team_name</th>
            <th>games_played</th>
            <th>minutes_per_game</th>
            <th>field_goals_attempted_per_game</th>
            <th>field_goals_made_per_game</th>
            <th>field_goal_percentage</th>
            <th>free_throw_percentage</th>
            <th>three_point_attempted_per_game</th>
            <th>three_point_made_per_game</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ResutlsTable;
