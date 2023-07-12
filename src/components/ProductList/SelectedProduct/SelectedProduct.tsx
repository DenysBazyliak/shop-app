import "./SelectedProduct.module.css";
import React from "react";
import Card from "@mui/material/Card";
import { Box, Button, CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { deleteProduct, setProduct } from "../../../store/productsSlice.ts";
import { useAppDispatch } from "../../../hooks/hooks.tsx";

type SelectedProductProps = {
  id: string;
  imageUrl: string;
  name: string;
  count: number;
  size: {
    width: number;
    height: number;
  };
  weight: string;
};

export const SelectedProduct: React.FC<SelectedProductProps> = (props) => {
  const dispatch = useAppDispatch();
  return (
    <div className={"selectedProduct"}>
      <Card
        sx={{
          width: "400px",
          height: "350px",
          backgroundColor: " #795d5d",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ width: "100% ", height: "180px" }}
            height="140"
            image={props.imageUrl}
            alt="green iguana"
          />
          <CardContent
            sx={{
              textAlign: "center",
            }}
          >
            <Typography variant="h5" component="div">
              {props.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <table className={"table"}>
                <tr className={"tr"}>
                  <th>Count</th>
                  <th>{props.count}</th>
                </tr>
                <tr className={"tr"}>
                  <th>Width</th>
                  <th>{props.size.width}</th>
                </tr>
                <tr className={"tr"}>
                  <th>Height</th>
                  <th>{props.size.height}</th>
                </tr>
                <tr className={"tr"}>
                  <th>Weight</th>
                  <th>{props.weight}</th>
                </tr>
              </table>
            </Box>
          </CardContent>
          <Button
            variant={"contained"}
            color={"error"}
            onClick={() => {
              dispatch(setProduct(null));
              return dispatch(deleteProduct(props.id));
            }}
          >
            Delete
          </Button>
        </CardActionArea>
      </Card>
    </div>
  );
};
