import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

const card = (
  <>
    <CardContent>
      <Typography variant="h6" component="div">
        Welcome back to the Playground
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Hope you enjoy your stay.</Typography>
    </CardContent>
  </>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}