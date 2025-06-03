import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Person } from "@mui/icons-material";
import { Avatar, CardHeader } from "@mui/material";

const card = (
  <>
    <CardContent>
      <Box style={{ display: 'flex', alignItems: 'center' }}>
        <Person sx={{ mr: 2 }} />
        <Typography variant="h6" component="div">
          New applicants
        </Typography>
      </Box>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>You've received 8 applicants since you last checked.</Typography>
    </CardContent>
  </>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 330 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}