import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Alert, Slide, Snackbar } from "@mui/material";

function TransitionRight(props) {
  return <Slide {...props} direction="left" />;
}

export default function ArticleCard({ body, header, url }) {
  const [value] = React.useState(url);
  const [, setCopied] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const [open, setOpen] = React.useState(false);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const onCopy = React.useCallback(() => {
    setCopied(true);
    handleClick();
    setTimeout(() => setOpen(false), 2000);
  }, []);
  return (
    <Card sx={{ maxWidth: "100%", minHeight: "200px", marginBottom: 6 }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        TransitionComponent={transition}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Link Copied
        </Alert>
      </Snackbar>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <CopyToClipboard onCopy={onCopy} text={value}>
          <Button onClick={handleClick(TransitionRight)} size="small">Share</Button>
        </CopyToClipboard>
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
