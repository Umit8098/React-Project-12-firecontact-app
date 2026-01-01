import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Secure Authentication",
    desc: "Firebase Authentication with Email & Password",
    icon: "🔐",
  },
  {
    title: "Realtime Database",
    desc: "Instant CRUD operations with Firebase Realtime DB",
    icon: "⚡",
  },
  {
    title: "Modern UI",
    desc: "React + MUI + clean UX design",
    icon: "🎨",
  },
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* HERO */}
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #1976d2 30%, #42a5f5 90%)",
          color: "white",
        }}
      >
        <Container maxWidth="md" textAlign="center">
          <Typography variant="h3" fontWeight="bold" mb={2}>
            FireContact 📇
          </Typography>

          <Typography variant="h6" mb={4}>
            Manage your contacts securely with Firebase & React
          </Typography>

          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={() => navigate("/app")}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* FEATURES */}
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Grid container spacing={4}>
          {features.map((f, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card elevation={3}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography fontSize={40}>{f.icon}</Typography>
                  <Typography variant="h6" mt={2} mb={1}>
                    {f.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {f.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FOOTER */}
      <Box textAlign="center" mt={10} mb={3}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} UmitDev – Firebase Contact App
        </Typography>
      </Box>
    </Box>
  );
};

export default Landing;
