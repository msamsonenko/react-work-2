import './Statistics.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Feedback</th>
          <th>Votes</th>
        </tr>
        <tr>
          <td>Good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{total()}</td>
        </tr>
        <tr>
          <td>Positive feedbacks</td>
          <td>{positivePercentage()}%</td>
        </tr>
      </table>
    </div>
  );
};

export default Statistics;
