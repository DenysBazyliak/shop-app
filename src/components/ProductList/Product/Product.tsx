import React from "react";

import { useAppDispatch } from "../../../hooks/hooks.tsx";
import { setProduct } from "../../../store/productsSlice.ts";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import "./Product.css";

type ProductProps = {
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

export const Product: React.FC<ProductProps> = (props) => {
  const dispatch = useAppDispatch();
  return (
    <div className={"product"}>
      <Card
        sx={{
          maxWidth: 330,
          margin: "20px 30px 20px 50px",
          backgroundColor: " #795d5d",
        }}
      >
        <CardActionArea onClick={() => dispatch(setProduct(props))}>
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
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
