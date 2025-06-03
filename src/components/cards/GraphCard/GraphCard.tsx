import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts";
const card = (
  <>
    <CardContent>
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Statistics
      </Typography>
      <PieChart
        series={
          [
            {
              data: [
                { id: 0, value: 10, label: "A" },
                { id: 1, value: 20, label: "B" },
                { id: 2, value: 30, label: "C" },
                { id: 3, value: 40, label: "D" }
              ]
            }
          ]
        }
        width={250}
        height={250}
      />

    </CardContent>
    <CardActions>
      <Button size="small">More</Button>
    </CardActions>
  </>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}