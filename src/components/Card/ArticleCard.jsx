import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ArticleCard({ body, header,url }) {
  return (
    <Card sx={{ maxWidth: "100%", minHeight:"200px", marginBottom:6 }}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <a
          target={"_blank"}
          rel="noreferrer"
          href={url}
          className="no-underline css-ueiwni"
        >
          <Button size="small">Read Article</Button>
        </a>
      </CardActions>
    </Card>
  );
}
