import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";

// .color1 {  };
// .color2 {  };
// .color3 { # };
// .color4 { # };
// .color5 { # };

const MaterialCard = ({ repositorio }) => {
  console.log(repositorio);
  return (
    <Card sx={{ margin: "5px", backgroundColor: "#fbffcd" }}>
      <CardContent>
        <Typography variant="body1" color="#1c5560">
          {repositorio.name}
        </Typography>
        <Chip
          label={repositorio.language ? repositorio.language : "Desconhecida"}
          color="primary"
          sx={{color: '#fff'}}
        />
        <br />
        <Link
          variant="body2"
          href={repositorio.html_url}
          target="_blank"
          rel="noreferrer"
          color="#001f36"
        >
          Acesar repositório
        </Link>
      </CardContent>
    </Card>
  );
};

export default MaterialCard;